# AUTOGENERATED DO NOT EDIT

module Cityworks
  module Ams
    module WorkOrder
      class ChangeCustomFieldCategory < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[CategoryId WorkOrderIds].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end