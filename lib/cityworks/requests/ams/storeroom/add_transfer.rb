# AUTOGENERATED DO NOT EDIT

module Cityworks
  module Ams
    module Storeroom
      class AddTransfer < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[Destination MaterialSid Quantity Source].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end
