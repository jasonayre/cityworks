# AUTOGENERATED DO NOT EDIT

module Cityworks
  module Ams
    module TvInspection
      class ChangeCustomFieldCategory < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[CategoryId TvIds].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end