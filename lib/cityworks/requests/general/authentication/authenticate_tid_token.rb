# AUTOGENERATED DO NOT EDIT

module Cityworks
  module General
    module Authentication
      class AuthenticateTidToken < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[TidToken Url].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end
