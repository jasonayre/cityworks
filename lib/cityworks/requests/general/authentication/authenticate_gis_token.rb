# AUTOGENERATED DO NOT EDIT

module Cityworks
  module General
    module Authentication
      class AuthenticateGisToken < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[GisToken GisTokenUrl LoginName].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end
