# AUTOGENERATED DO NOT EDIT

module Cityworks
  module Ams
    module ServiceRequest
      class ProblemLeafByOtherSysCodeDescs < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[OtherSysCode OtherSysDesc1 OtherSysDesc2].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end
