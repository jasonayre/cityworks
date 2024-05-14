#!/usr/bin/env ruby
require 'json'
require 'erb'
require 'fileutils'
require 'active_support/core_ext/string/inflections'
require 'pry'
OVERWRITE = ARGV[0] == "true" ? true : false

# Load and parse the schema JSON
schema_file = File.expand_path('../../schema/ruby_schema.json', __FILE__)
puts "Schema file path: #{schema_file}"
schema = JSON.parse(File.read(schema_file))

# Path to the ERB template
#template_path = File.expand_path('../../lib/templates/request_class.erb', __FILE__)
template_path = File.expand_path('../../lib/templates/request_class.erb', __FILE__)
puts "Template file path: #{template_path}"
template = ERB.new(File.read(template_path), trim_mode: '-')
requests_template_path = File.expand_path('../../lib/templates/requests_template.erb', __FILE__)
requests_template = ERB.new(File.read(requests_template_path), trim_mode: '-')
generated_class_paths = []

# Iterate through the schema to generate classes
schema.each do |namespace_name, services|
  services.each do |service_name, actions|
    actions.each do |action_name, details|
      # Collect required parameters
      required_params = details['params'].select { |p| p['required'] }.map{ |p| p["name"] }
      # Set the target directory
      dir_path = File.join(File.expand_path('../../lib/cityworks/requests', __FILE__), namespace_name.underscore, service_name.underscore)
      FileUtils.mkdir_p(dir_path) unless File.exists?(dir_path)
      puts "Directory path for generated classes: #{dir_path}"

      File.open(template_path) { |_template|
        erb = ERB.new(_template.read, nil, '-')

        result = erb.result_with_hash(
          namespace_name: namespace_name,
          service_name: service_name,
          action_name: action_name,
          parameters: required_params
        )
        class_file_path = File.join(dir_path, "#{action_name.underscore}.rb")
        relative_path = "./requests/#{namespace_name.underscore}/#{service_name.underscore}/#{action_name.underscore}"
        generated_class_paths << relative_path


        # unless File.exist?(class_file_path) && !OVERWRITE
        File.open(class_file_path, 'w') { |file| file.write(result) }
        puts "SHOULD BE WRITING"
        # end
        erb
      }

      class_file_path = File.join(dir_path, "#{action_name.underscore}.rb")
      #File.open(class_file_path, 'w') { |file| file.write(result) }
      puts "Generated: #{class_file_path}"
    end
  end
end

# requests_template = ERB.new(File.read(requests_template_path), trim_mode: '-')
requests_rb_path = File.expand_path('../../lib/cityworks/requests.rb', __FILE__)
File.open(requests_rb_path, 'w') do |file|
  # binding.pry
  File.open(requests_template_path) do |template|
    # binding.pry
    erb = ERB.new(template.read, nil, '-')
    # binding.pry
    content = erb.result_with_hash(paths: generated_class_paths)

    file.write(content)
  end
end
