require 'active_support/hash_with_indifferent_access'
require 'active_support/core_ext/class/attribute'
require 'pry'
require 'cityworks'
module Cityworks
  class RequestParameters < ::Cityworks::Parameters
    COERCERS = {
      "DateTime" => ->(v) {
        case v
        when String
          v
        when DateTime
          v.iso8601
        else
          v.to_s
        end
      }
    }
    # Return the parsed api schema params
    def self.schema_description
      self.schema
    end

    def self.schema
      @_schema ||= begin
        parent_klass = self.module_parent
        parent_klass.schema.dig("params")
      end
    end

    def prepared
      _params = self.camelized
      self.class._params_to_coerce.each do |param|
        value = self[param["name"]]
        _params[param["name"]] = COERCERS[param["type"]].call(value)
      end
      _params
    end

    private
    def self._params_to_coerce
      @_params_to_coerce = schema.select{ |param| COERCERS.include?(param["type"]) }
    end
  end
end
