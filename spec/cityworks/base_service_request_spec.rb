# spec/cityworks/base_service_request_spec.rb
require 'cityworks'
require 'cityworks/base_service_request'

RSpec.describe Cityworks::BaseServiceRequest do
  describe ::Cityworks::Ams::ServiceRequest::ById do
    describe ".inherited" do
      subject { described_class }
      it 'sets response class' do
        expect(subject.response_klass.name).to eq("Cityworks::Ams::ServiceRequest::ById::Response")
      end

      it 'sets namespace_name correctly' do
        expect(subject.namespace_name).to eq('Ams')
      end

      it 'sets service_name correctly' do
        expect(subject.service_name).to eq('ServiceRequest')
      end

      it 'sets action_name correctly' do
        expect(subject.action_name).to eq('ById')
      end
    end
  end
end
