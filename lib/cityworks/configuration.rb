module Cityworks
  class Configuration
    attr_accessor :username, :password, :token, :services_url, :raise_on_response_errors

    def initialize(
      username: ENV['CITYWORKS_USERNAME'],
      password: ENV['CITYWORKS_PASSWORD'],
      token: ENV['CITYWORKS_TOKEN'],
      services_url: ENV['CITYWORKS_SERVICES_URL'],
      raise_on_response_errors: true
    )
      @username = username
      @password = password
      @token = token
      @services_url = services_url
      @raise_on_response_errors = raise_on_response_errors
    end
  end
end
