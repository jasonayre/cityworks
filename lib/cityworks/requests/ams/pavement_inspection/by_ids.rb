# AUTOGENERATED DO NOT EDIT

module Cityworks
  module Ams
    module PavementInspection
      class ByIds < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[Ids InspectionSids].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end