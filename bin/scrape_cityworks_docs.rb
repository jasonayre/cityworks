#!/usr/bin/env ruby

require 'json'

# Check if the base URL argument is provided
if ARGV.length != 1
  puts "Usage: #{$0} <base_url>"
  exit 1
end

base_url = ARGV[0]

# Read the URLs from the JSON file
urls_file = File.join(File.dirname(__FILE__), '..', '..', 'schema', 'urls.json')
puts urls_file
urls_file = File.expand_path('../schema/urls.json', __dir__)
puts urls_file

urls = JSON.parse(File.read(urls_file))
# threads = []
# Iterate through each URL and run the scrape_cityworks_service.rb script
urls.each do |url|
  full_url = "#{base_url}#{url}"
  scrape_script = File.join(File.dirname(__FILE__), '..', 'bin', 'scrape_cityworks_service.rb')

  puts scrape_script.inspect
  puts full_url
  system("ruby #{scrape_script} \"#{full_url}\"")
  # Run the scrape_cityworks_service.rb script with the full URL as the argument
  # threads << Thread.new do
  #   system("ruby #{scrape_script} \"#{full_url}\"")
  # end
end

# threads.each(&:join)
