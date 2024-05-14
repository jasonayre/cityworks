#!/usr/bin/env ruby
require 'json'
require 'set'

schema_file = File.expand_path('../../schema/index.json', __FILE__)
schema = JSON.parse(File.read(schema_file))
puts schema.inspect
unique_types = Set.new

# Traverse the schema to collect parameter types
schema.each do |namespace, services|
  services.each do |service_name, actions|
    actions.each do |action_name, details|
      details['params'].each do |param|
        unique_types.add(param['type']) if param['type']
      end if details['params']
    end
  end
end

puts "Unique Parameter Types:"
unique_types.each { |type| puts type }
