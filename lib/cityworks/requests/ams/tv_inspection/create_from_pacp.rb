# AUTOGENERATED DO NOT EDIT

module Cityworks
  module Ams
    module TvInspection
      class CreateFromPacp < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[PipeId PipeType WorkOrderId].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end