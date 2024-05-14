module Cityworks
  class Client
    attr_accessor :token, :services_url, :id

    def initialize(username: nil, password: nil, token: nil, services_url: nil, id: nil)
      @id = id
      @services_url = services_url || ::Cityworks&.config&.services_url || 'http://localhost/cityworks/services/'
      @username = username || ::Cityworks&.config&.username unless token
      @password = password || ::Cityworks&.config&.password unless token
      @token = token || ::Cityworks&.config&.token

      @connection = Faraday.new(url: @services_url) do |faraday|
        faraday.request :json
        faraday.response :json
        faraday.adapter Faraday.default_adapter
      end

      authenticate(@username, @password) if @username && @password && !@token
    end

    def authenticate(username, password)
      response = @connection.get('General/Authentication/Authenticate') do |req|
        req.params['data'] = { LoginName: username, Password: password }.to_json
      end

      if response.status == 200
        body = response.body
        @token = body.dig('Value', 'Token')
      else
        raise "Authentication failed: #{response.body}"
      end
    end

    def authorized_request(method, path, params = {})
      raise 'Token is not set. Please authenticate first.' unless @token

      response = @connection.send(method, path) do |req|
        req.headers['Authorization'] = "cityworks #{@token}"
        req.params = params
      end

      response.body
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
