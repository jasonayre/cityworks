require 'cityworks'
require 'rspec'
require 'active_support/all'

# For actual integration testing against a cityworks url. Pass in:
# CITYWORKS_USERNAME, CITYWORKS_PASSWORD, CITYWORKS_SERVICES_URL, else it is skipped
RSpec.describe Cityworks, :skip => !ENV["CITYWORKS_USERNAME"] do
  let(:client) {
    ::Cityworks.configure {}
    ::Cityworks::Client.new
  }

  context "ErrorHandling" do
    #no ProblemSid so should error
    subject {
      ::Cityworks::Ams::ServiceRequest::Create.new(
        {
          Comments: "TEST DATA: CITYWORKS GEM INTEGRATION TEST"
        },
        client: client
      )
    }

    describe "#execute" do
      it {
        expect{ subject.execute }.not_to raise_error
      }
    end

    describe "#execute!" do
      it "raises a Cityworks::ApiError when bang version called" do
        expect { subject.execute! }.to raise_error(Cityworks::ApiError)
      end
    end
  end

  context("basic_requests_smoke_test") do
    describe Cityworks::Ams::ServiceRequest::ById do
      subject {
        described_class.new({RequestId: 103123}, client: client)
      }

      it {
        result = subject.execute
        expect(result["RequestId"]).to eq(103123)
        expect(subject.execute.data).to be_an_instance_of(Hash)
      }
    end

    describe Cityworks::General::Holidays::All do
      subject {
        described_class.new(client: client)
      }

      it {
        binding.pry
        expect(subject.execute.data).to be_an_instance_of(Hash)
      }
    end
  end

  context "ServiceRequestFlow" do
    context "fetch problems" do
      let(:problems) { ::Cityworks::Ams::ServiceRequest::Problems.new(client: client).execute }
      let(:problem_sid) { problems[0]["ProblemSid"]}

      it "fetches problems" do
        expect(problem_sid).to be_an(Integer)
      end

      #rq = Dig::RequestTemplates::Cityworks::CreateServiceRequestFromTicket.first

      context "creates service request" do
        let(:service_request) {
          ::Cityworks::Ams::ServiceRequest::Create.new(
            {
              ProblemSid: problem_sid,
              Date1: DateTime.now,
              X: 1234.00,
              Y: 1234.00,
              Details: "Ticket: A241360267 Rev: 00A Created: 2024-05-15 16:38:53 UTC User: COREY MAHER Chan: 100\nWork Start: 2024-05-17 15:00:00 UTC Legal Start: 2024-05-17 15:00:00 UTC Expires: 2024-05-18 00:01:00 UTC\nResponse Required: true Priority: SHRT\n1 Year: false Boring: false Street/Sidewalk: false Vacuum: false Explosives: false PavementOnly: false\nWorkType: GRADING FOR NEW CONST WorkFor: SUPER GREEN BUILDERS",
              Comments: "\nRemarksRequired: \nExcavatorProvided: \nMembers: MBR001MBR020MBR039LONGMBR058MBR153MBR172MBR191LONGMBR210MBR324MBR343LONGMBR362MBR077MBR096MBR115LONGMBR134MBR229MBR248MBR267LONGMBR286\nJob/Work order: AB123456\nPermit: 123456789ABC\nMap Link: https://somelink.doamin.com/linkinformationhereandthiscouldbealongstring\n\n12345 MAIN ST, CARSON 90745",
              # Comments: "TEST DATA: CITYWORKS GEM INTEGRATION TEST",
            },
            client: client
          ).execute
        }
        let(:service_request_id) { service_request["RequestId"] }

        it {
          expect(service_request["ProblemSid"]).to be_an(Integer)
          expect(service_request["RequestId"]).to be_an(Integer)
        }

        context "destroys it" do
          let(:destroy_service_request_request) {
            ::Cityworks::Ams::ServiceRequest::Delete.new(
              {
                RequestIds: [service_request["RequestId"]]
              },
              client: client
            ).execute
          }

          it {
            expect(destroy_service_request_request.success?).to eq(true)
          }
        end
      end
    end
  end
end
