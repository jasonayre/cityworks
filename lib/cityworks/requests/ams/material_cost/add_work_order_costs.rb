# AUTOGENERATED DO NOT EDIT

module Cityworks
  module Ams
    module MaterialCost
      class AddWorkOrderCosts < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[Units WorkOrderId WorkOrderSid].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end
