# AUTOGENERATED DO NOT EDIT

module Cityworks
  module Ams
    module Employee
      class DeleteLicensedItems < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[EmployeeSids LicenseCodes].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end
