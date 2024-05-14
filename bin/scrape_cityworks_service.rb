#!/usr/bin/env ruby

require 'selenium-webdriver'
require 'json'
require 'fileutils'

# URL of the website you want to visit
TARGET_URL = ARGV[0]

# Output directory for the generated JSON files
OUTPUT_DIR = File.expand_path('../schema', __dir__)

# Create the output directory if it doesn't exist
FileUtils.mkdir_p(OUTPUT_DIR)
Selenium::WebDriver::Firefox::Service.driver_path = "/usr/local/bin/geckodriver"

Selenium::WebDriver::Firefox::Binary.path = "/Applications/Firefox.app/Contents/MacOS/firefox"

driver = Selenium::WebDriver.for :firefox
# driver = Selenium::WebDriver.for :chrome

# Extracts parameters for each method section
def extract_params(method_section)
  params = []

  param_elements = method_section.find_elements(:css, '.parameters .parameter')
  param_elements.each do |param_element|
    param_type = param_element.find_element(:css, '.parameterType span').text.strip
    param_name = param_element.find_element(:css, '.parameterName').text.strip
    required = !param_element.find_elements(:css, '.required .ng-star-inserted').empty?
    comments = param_element.find_element(:css, '.parameterComments').text.strip

    params << {
      'name' => param_name,
      'type' => param_type,
      'required' => required,
      'comments' => comments
    }
  end

  params
end

# Extracts data for all services and their associated methods
@config = {}

def extract_service_data(driver)
  services = {}

  # Find all parent services
  service_sections = driver.find_elements(:css, 'main-menu ul.pageNav li.parentMenu')
  service_sections.each do |service_section|
    segs = TARGET_URL.split("/service-info/").pop.split("/")
    puts segs.inspect
    service_module = segs[0]
    service_name = segs[1]
    @config[:service] = service_name
    @config[:namespace] = service_module
    methods = {}


    # Extract all methods for the given service
    method_sections = driver.find_elements(:css, '.methods .method')
    method_sections.each do |method_section|
      method_title = method_section.find_element(:css, '.titleBar span').text.strip
      url_element = method_section.find_element(:css, '.request-json-wrapper textarea')
      url_text = url_element.text.split("\n").find { |line| line.include?('https://') }
      url = "https://{{DOMAIN}}/{{INSTALL_PATH}}/services/#{service_module}/#{service_name}/#{method_title}"

      params = extract_params(method_section)

      methods[method_title] = {
        'url' => url,
        'params' => params
      }
    end

    services[service_name] = methods
  end

  services
end


begin
  # Navigate to the target URL
  driver.get TARGET_URL

  # Wait for 3 seconds before injecting the JavaScript
  sleep 5

  # Inject the JavaScript to expand the sections
  driver.execute_script(<<~JAVASCRIPT)
    $(document).ready(function() {
      // Expand all parent menu sections containing services/actions
      $('main-menu .area.parentMenu').each(function() {
        var $section = $(this);
        // If the section is collapsed, simulate a click to expand
        if (!$section.hasClass('open')) {
          $section.find('.areaName').click();
        }
      });

      // Expand individual service action items
      $('.methods .titleBar').each(function() {
        var $method = $(this);
        // If the method section isn't expanded, simulate a click to open it
        if (!$method.closest('.method').hasClass('expanded')) {
          $method.click();
        }
      });

      // Open "Show Request Query" and "Response Messages" if present
      $('.show-json').each(function() {
        var $queryBtn = $(this);
        // Simulate a click to reveal the query JSON
        if ($queryBtn.is(':visible')) {
          $queryBtn.click();
        }
      });

      $('.responses').each(function() {
        var $responseSection = $(this);
        // If the response messages section is visible but not expanded, expand it
        if ($responseSection.find('.response').length > 0) {
          $responseSection.show();
        }
      });
    });
  JAVASCRIPT

  sleep(2)

  # Extract service data
  service_data = extract_service_data(driver)

  # Write service data to a JSON file
  output_file = File.join(OUTPUT_DIR, "#{@config[:namespace]}/#{@config[:service]}.json")
  FileUtils.mkdir_p("#{OUTPUT_DIR}/#{@config[:namespace]}")
  File.write(output_file, JSON.pretty_generate(service_data))
  puts "Service data written to: #{output_file}"
rescue StandardError => e
  puts "An error occurred: #{e.message}"
ensure
  # Quit the driver
  driver.quit
end
