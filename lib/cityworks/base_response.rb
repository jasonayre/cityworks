require 'delegate'
require 'json'

module Cityworks
  class BaseResponse < SimpleDelegator
    attr_reader :raw_response, :data

    def initialize(raw_response)
      @raw_response = raw_response
      @data = parse_response(@raw_response.body)
      super(@data['Value'] || {})
    end

    def [](key)
      @data.key?(key) ? @data[key] : super(key)
    end

    def errors
      data["ErrorMessages"].map{ |h| h["DisplayText"] }
    end

    def full_errors
      @data["ErrorMessages"] || []
    end

    def raw
      @raw_response
    end

    def success?
      !is_blank_hash? && @data["Status"] == 0
    end

    def is_blank_hash?
      @data.empty?
    end

    #because CW responds with a Status field and that is one of their core response fields, only return the contents of value
    #best practice would be to unwrap this way for now
    def to_hash
      # h = @data.without("Value", "SuccessMessages", "ErrorMessages", "Message", "WarningMessages")
      {
        **@data["Value"]
      }
    end

    private

    def parse_response(response)
      if response.is_a?(Hash)
        response
      elsif response.nil? || response.strip.empty?
        {}
      else
        begin
          result = JSON.parse(response)

        rescue JSON::ParserError
          {}
        end
      end
    end
  end
end
