require 'cityworks'
require 'rspec'

RSpec.describe Cityworks do
  describe ".schema" do
    it "reads and parses schema" do
      expect(Cityworks.schema.keys).to include("Ams", "General", "Pll", "Gis")
    end
  end
end
