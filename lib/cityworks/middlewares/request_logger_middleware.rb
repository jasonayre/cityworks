require 'faraday'
require 'logger'

module Cityworks
  module Middlewares
    class RequestLoggerMiddleware < Faraday::Middleware
      def initialize(app, logger: nil)
        super(app)
        @logger = logger || Logger.new(STDOUT)
      end

      def call(env)
        @logger.info("Making a request to #{env.url}")
        @logger.info("Request method: #{env.method.upcase}")
        @logger.info("Request body: #{env.body}")
        @logger.info("Request headers: #{env.request_headers}")
        @app.call(env)
      end
    end
  end
end
