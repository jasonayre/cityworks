require 'cityworks'
require 'rspec'

RSpec.describe Cityworks::Parameters do
  subject {
    described_class.new(:some_id => "anything", :text_20 => "blah")
  }

  it "#camelized" do
    expect(subject.camelized.keys).to include("SomeId")
    expect(subject.camelized["Text20"]).to eq("blah")
  end

  describe Cityworks::Ams::ServiceRequest::ById::Parameters do
    it {
      expect(described_class.schema).to be_an_instance_of(Array)
    }
  end

  context "RequestParams" do
    subject { ::Cityworks::Ams::ServiceRequest::Create::Parameters }
    it { expect(subject.all).to be_an(Array) }
    it "individual param structure can easily be inspected" do
      expect(subject["ProblemSid"]["name"]).to eq("ProblemSid")
    end

    it "coerces date time automatically" do
      expect(Cityworks::Ams::ServiceRequest::Create::Parameters.new(
        {'Date1': DateTime.now}
      ).prepared["Date1"]).to be_an(String)
    end
  end
end
