# AUTOGENERATED DO NOT EDIT

module Cityworks
  module General
    module ActivityLink
      class ByActivitySids < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[ActivitySids ActivityType].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end