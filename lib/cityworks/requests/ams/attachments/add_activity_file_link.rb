# AUTOGENERATED DO NOT EDIT

module Cityworks
  module Ams
    module Attachments
      class AddActivityFileLink < ::Cityworks::BaseServiceRequest
        class Parameters < ::Cityworks::RequestParameters
          REQUIRED = %w[ActivitySid ActivityType Path].freeze
        end

        class Response < ::Cityworks::BaseResponse
        end
      end
    end
  end
end
