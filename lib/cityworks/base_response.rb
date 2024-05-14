require 'json'

module Cityworks
  class BaseResponse
    attr_reader :raw_response, :data

    def initialize(raw_response)
      @raw_response = raw_response

      # Parse or initialize an empty hash if the response is blank. WHYYYY THOUGH
      @data = parse_response(@raw_response)
    end

    def [](key)
      data.dig('Value', key)
    end

    def errors
      data["ErrorMessages"].map{ |h| h["DisplayText"] }
    end

    def full_errors
      data["ErrorMessages"]
    end

    def raw
      @raw_response
    end

    def success?
      !is_blank_hash? && data["Status"] == 0
    end

    #lol that this is even a thing, but some endpoints return blank objects and or strings
    def is_blank_hash?
      data && data.keys.length == 0
    end

    def to_hash
      h = @data.without("Value")
      {
        **@data["Value"],
        **h
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
          JSON.parse(response)
        rescue JSON::ParserError
          {}
        end
      end
    end
  end
end
