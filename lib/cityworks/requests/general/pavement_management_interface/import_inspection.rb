# AUTOGENERATED DO NOT EDIT

module Cityworks
  module General
    module PavementManagementInterface
      class ImportInspection < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[SectionClassName SectionUid WorkOrderId].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end