# AUTOGENERATED DO NOT EDIT

module Cityworks
  module Pll
    module CasePaymentRefund
      class Update < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[CaPaymentRefundId Voided].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end