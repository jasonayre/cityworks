# AUTOGENERATED DO NOT EDIT

module Cityworks
  module Ams
    module LaborCost
      class AddInspectionCosts < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[Hours InspectionId].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end
