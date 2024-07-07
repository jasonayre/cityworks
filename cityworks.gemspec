
lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "cityworks/version"

Gem::Specification.new do |spec|
  spec.name          = "cityworks"
  spec.version       = Cityworks::VERSION
  spec.authors       = ["jasonayre"]
  spec.email         = ["jasonayre@gmail.com"]

  spec.summary       = %q{asd}
  spec.description   = %q{asd}
  spec.homepage      = "https://github.com"
  spec.license       = "MIT"

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  if spec.respond_to?(:metadata)
    spec.metadata["allowed_push_host"] = "TODO: Set to 'http://mygemserver.com'"

    spec.metadata["homepage_uri"] = spec.homepage
    spec.metadata["source_code_uri"] = "https://github.com"
    spec.metadata["changelog_uri"] = "https://github.com"
  else
    raise "RubyGems 2.0 or newer is required to protect against " \
      "public gem pushes."
  end

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files         = Dir.chdir(File.expand_path('..', __FILE__)) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]
  spec.add_dependency "faraday"
  spec.add_dependency "activesupport"
  spec.add_development_dependency "bundler", "~> 2.5.9"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "selenium-webdriver"
  spec.add_development_dependency 'rspec', '~> 3.0'
  spec.add_development_dependency 'pry'
  spec.add_development_dependency 'erb'
  spec.add_development_dependency 'json_schema'
end
