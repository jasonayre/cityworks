# AUTOGENERATED DO NOT EDIT

module Cityworks
  module Ams
    module Inspection
      class CreateFromWorkOrder < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[EntityType InspTemplateId WorkOrderId WorkOrderSid].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end
