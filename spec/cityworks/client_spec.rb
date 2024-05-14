# spec/cityworks/client_spec.rb
require 'cityworks'
require 'rspec'

RSpec.describe Cityworks::Client do
  let(:client) { Cityworks::Client.new }

  it 'initializes with authentication' do
    expect(client).to be_an_instance_of(Cityworks::Client)
  end

  it 'raises an error when token is missing' do
    expect { client.authorized_request(:get, 'General/SomeEndpoint') }
      .to raise_error('Token is not set. Please authenticate first.')
  end
end
