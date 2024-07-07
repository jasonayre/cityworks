require "cityworks/version"
require "active_support/all"
require 'active_support/core_ext/string/inflections'
require 'faraday'
require 'json'
require 'cityworks/middlewares/request_logger_middleware'
require 'cityworks/parameters'
require 'cityworks/request_parameters'
require 'cityworks/client'
require 'cityworks/configuration'
require 'cityworks/base_service_request'
require 'cityworks/base_response'
require 'cityworks/requests'

module Cityworks
  SCHEMA_PATH = File.expand_path('../../schema/index.json', __FILE__)

  class Error < StandardError; end
  class ParsingError < Error; end
  class ApiError < Error; end

  KNOWN_TYPES_MAPPING = {
    'Int32' => 'Integer',
    'Int64' => 'Integer',
    'String' => 'String',
    'Decimal' => 'Float',
    'Double' => 'Float',
    'Boolean' => 'Boolean',
    'DateTime' => 'DateTime',
    'List<String>' => 'Array[String]',
    'List<Int64>' => 'Array[Integer]',
    'List<Int32>' => 'Array[Integer]',
    'List<Decimal>' => 'Array[Float]',
    'List<DateTime>' => 'Array[DateTime]',
    'List<Byte>' => 'Array[Integer]',
    'Dictionary<String, List<String>>' => 'Hash{String => Array[String]}',
    'Dictionary<Int32, String>' => 'Hash{Integer => String}',
    'Dictionary<Int32, DateTime>' => 'Hash{Integer => DateTime}',
    'Dictionary<Int32, Decimal>' => 'Hash{Integer => Float}',
    'Dictionary<Int32, List<String>>' => 'Hash{Integer => Array[String]}',
  }

  class << self
    attr_accessor :configuration

    # Ensure configuration is always set up
    def configuration
      @configuration ||= Configuration.new
    end

    # Provide a block to configure the gem
    def configure
      yield(configuration)
    end

    def config
      @configuration
    end
  end

  def self.schema
    ::JSON.parse(::File.read(SCHEMA_PATH))
  end

  def self.new(**kwargs)
    ::Cityworks::Client.new(**kwargs)
  end
end
