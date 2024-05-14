require 'active_support/hash_with_indifferent_access'

module Cityworks
  class Parameters < ActiveSupport::HashWithIndifferentAccess
    # so you can easily inspect things like when there is a comment on a field or enum structures
    # i.e. ::Cityworks::Ams::ServiceRequest::Create::Parameters["CustomFieldValues"]
    def self.[](key)
      schema.find { |param| param["name"] == key || param["name"] == key.camelize(:upper) }
    end

    def self.all
      schema
    end

    #the snake case stuff is leftover from first syntax, i.e. rubifying the request params
    #still on the fence about it, cuz kw args are nicer to work with and passing in the client
    #separately with an object as the first param, doesn't feel super clean
    def [](key)
      snake_case_key = key.to_s.underscore
      camel_case_key = snake_case_key.camelize(:upper)

      super(snake_case_key) || super(camel_case_key)
    end

    def key?(key)
      snake_case_key = key.to_s.underscore
      camel_case_key = snake_case_key.camelize(:upper)

      super(snake_case_key) || super(camel_case_key)
    end

    # because we can't use Keyword Args that start with uppercase letters, we have to convert it back
    # before sending it back to CW api
    def camelized
      camelized_hash = ActiveSupport::HashWithIndifferentAccess.new
      each do |key, value|
        camelized_key = key.to_s.camelize(:upper)
        camelized_hash[camelized_key] = value
      end
      camelized_hash
    end

    def rubified
      rubified_hash = ActiveSupport::HashWithIndifferentAccess.new
      each do |key, value|
        rubified_key = key.to_s.camelize(:upper)
        rubified_hash[rubified_key] = value
      end
      rubified_hash
    end
  end
end
