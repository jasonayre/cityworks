# AUTOGENERATED DO NOT EDIT

module Cityworks
  module Pll
    module CaseTaskResults
      class Add < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[CaObjectId CaTaskId ResultCode ResultID ResultSetID].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end
