# AUTOGENERATED DO NOT EDIT

module Cityworks
  module Pll
    module CaseDataDetail
      class WIPAdd < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[CaDataGroupId CaseDataDetailId ColumnSequence DetailCode DetailSequence].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end