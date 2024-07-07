require 'active_support/core_ext/class/attribute'

module Cityworks
  class BaseServiceRequest
    PARAMETER_TYPES_TO_COERCE = ['DateTime']
    class_attribute :namespace_name, :service_name, :action_name
    attr_accessor :client, :params

    def initialize(_params={}, client: ::Cityworks::Client.new)
      @client = client
      @params = self.class.params_klass.new(_params)
    end

    def endpoint_url
      "#{client.services_url}/#{self.class.namespace_name}/#{self.class.service_name}/#{self.class.action_name}"
    end

    def execute
      response = client.authorized_request(:get, endpoint_url, data: params.prepared.to_json)
      puts response.inspect
      response_message = self.class.response_klass.new(response)
      response_message
    rescue JSON::ParserError
      raise "Failed to parse response from #{endpoint_url}"
    end

    def execute!(method: :post)
      response = client.authorized_request(method, endpoint_url, data: params.prepared.to_json)

      if(!response.success?)
        raise Cityworks::ApiError, "API ERROR: Status: #{response.status}, Body: #{response.body}"
      end

      response_message = self.class.response_klass.new(response)

      if !response_message.success?
        raise ::Cityworks::ApiError, "API ERROR: #{response_message.errors.join}"
      end

      response_message
    rescue JSON::ParserError
      raise "Failed to parse response from #{endpoint_url}"
    end

    def self.inherited(subclass)
      super
      subclass_parts = subclass.name.split('::')

      # Extract service details based on class name structure
      subclass.namespace_name = subclass_parts[-3] || ''
      subclass.service_name = subclass_parts[-2] || ''
      subclass.action_name = subclass_parts[-1] || ''
    end

    def self.response_klass
      "Cityworks::#{namespace_name}::#{service_name}::#{action_name}::Response".constantize
    end

    def self.params_klass
      "Cityworks::#{namespace_name}::#{service_name}::#{action_name}::Parameters".constantize
    end

    def self.schema
      @_schema ||= ::Cityworks.schema.dig(*keys_for_schema)
    end

    def self.keys_for_schema
      [namespace_name, service_name, action_name]
    end
  end
end
