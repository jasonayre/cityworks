# AUTOGENERATED DO NOT EDIT

module Cityworks
  module General
    module EurlQuery
      class FindReplaceConfigurationText < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[NewText OldText].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end
