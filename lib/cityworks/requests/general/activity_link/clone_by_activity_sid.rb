# AUTOGENERATED DO NOT EDIT

module Cityworks
  module General
    module ActivityLink
      class CloneByActivitySid < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[DestinationActivitySid DestinationActivityType SourceActivitySid SourceActivityType].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end
