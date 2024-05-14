#!/usr/bin/env ruby

require 'json'
require 'fileutils'

schema_dir = File.expand_path('../schema', __dir__)
merged_data = {}


Dir.glob("#{schema_dir}/*") do |namespace_dir|
  puts schema_dir.to_s
  puts namespace_dir.to_s
  namespace = File.basename(namespace_dir)

  Dir.glob("#{namespace_dir}/*.json") do |json_file|
    json_data = JSON.parse(File.read(json_file))
    service_name = File.basename(json_file, '.json')

    merged_data[namespace] = {} if !merged_data[namespace]
    merged_data[namespace][service_name] = {} if !merged_data[namespace][service_name]
    puts service_name
    puts merged_data
    puts json_data

    json_data[service_name].each_pair do |k,v|
      merged_data[namespace][service_name][k] = v
    end
  end
end

# Write the merged data to the index.json file
output_file = "#{schema_dir}/index.json"
File.write(output_file, JSON.pretty_generate(merged_data))
puts "Merged JSON data written to #{output_file}"
output_raw = "#{schema_dir}/index_raw.json"
File.write(output_raw, JSON.generate(merged_data))
