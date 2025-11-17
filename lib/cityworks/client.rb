module Cityworks
  class Client
    attr_accessor :token, :services_url, :id

    def initialize(username: nil, password: nil, token: nil, services_url: nil, id: nil, proxy: nil, proxy_ssl_verify: true, proxy_ssl_ca_file: nil)
      @id = id
      @services_url = services_url || ::Cityworks&.config&.services_url || 'http://localhost/cityworks/services/'
      @username = username || ::Cityworks&.config&.username unless token
      @password = password || ::Cityworks&.config&.password unless token
      @token = token || ::Cityworks&.config&.token
      @proxy = proxy
      @proxy_ssl_verify = proxy_ssl_verify
      @proxy_ssl_ca_file = proxy_ssl_ca_file

      @connection = Faraday.new(url: @services_url) do |faraday|
        ### todo: make middlewares configurable
        faraday.use Cityworks::Middlewares::RequestLoggerMiddleware
        faraday.request :json
        faraday.response :json

        # Configure proxy if provided
        faraday.ssl.verify = @proxy_ssl_verify if @proxy && !@proxy_ssl_ca_file
        faraday.proxy = @proxy if @proxy

        # Note: For HTTPS proxies, Faraday doesn't support custom CA certs directly
        # SSL verification is handled at the system level
        # For self-signed proxy certs, you may need to disable verification

        faraday.adapter Faraday.default_adapter
      end

      authenticate(@username, @password) if @username && @password && !@token
    end

    def authenticate(username, password)
      response = @connection.get('General/Authentication/Authenticate') do |req|
        req.params['data'] = { LoginName: username, Password: password }.to_json
      end

      if response.status == 200 && response.body["Status"] < 1
        body = response.body
        puts body.inspect
        @token = body.dig('Value', 'Token')
        puts "TOKEN IS"
        puts @token
      else
        puts response.inspect
        raise "Authentication failed: #{response.body}"
      end
    end

    def authorized_request(method, path, params = {})
      raise 'Token is not set. Please authenticate first.' unless @token

      response = @connection.send(method, path) do |req|
        req.headers['Authorization'] = "cityworks #{@token}"
        # req.headers['Content-Type'] = 'application/json'
        req.params = params
        # req.body = params
        # puts "PARAMS ARE"
        # puts params.inspect
        # puts "ENCODED PARAMS ARE"
        # puts URI.encode_www_form(params)
        #
        # req.body = URI.encode_www_form({
        #   "data": {
        #     "ProblemSid": 22268
        #   }
        # }.as_json)
        #
        # puts "REQUEST IS"
        # puts req.body
        # puts req
        # req.body = {
        #   :data => params[:data]
        #
        # }.to_json
        # req.body = {
        #   :data => params[:data]
        # }.as_json
      end

      response
    end

    def [](key)
      klass = ::Cityworks.const_get(key)
      request_klass_for_client(klass.new)
    end

    private

    def request_klass_for_client(klass)
      client_instance = self

      mod = Module.new do
        define_method(:new) do |*args, &block|
          self.client = client_instance
          self.params = self.class.params_klass.new(*args)
          self
        end
      end

      klass.singleton_class.prepend(mod)
      klass
    end
  end
end
