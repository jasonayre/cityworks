### NOT CURRENTLY IN USE: bc don't have access to the actual domain object structure ATM
#maybe could still use the field definition from the request params though? hmm

require 'active_support/hash_with_indifferent_access'
require 'active_support/core_ext/class/attribute'
require 'cityworks'
module Cityworks
  class ResponseParameters < ::Cityworks::Parameters
    COERCERS = {
      "DateTime" => ->(v) {
        if v.is_a?(String)
          DateTime.iso8601(v)
        else
          v
        end
      }
    }
    # Return the parsed api schema params
    # def self.schema_description
    #   self.schema
    # end
    #
    # def self.schema
    #   @_schema ||= begin
    #     parent_klass = self.module_parent
    #     parent_klass.schema.dig("params")
    #   end
    # end
    #
    # def prepared
    #   _params = self.camelized
    #   self.class._params_to_coerce.each do |param|
    #     value = self[param["name"]]
    #     _params[param["name"]] = COERCERS[param["type"]].call(value)
    #   end
    #   _params
    # end
    #
    # private
    # def self._params_to_coerce
    #   @_params_to_coerce = schema.select{ |param| COERCERS.include?(param["type"]) }
    # end
  end
end
