# AUTOGENERATED DO NOT EDIT

module Cityworks
  module Ams
    module EquipmentReservation
      class Reserve < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[EmployeeSid EquipmentSid ReservedToDate TransDateTime].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end
