# Cityworks

Ruby gem wrapping the Cityworks api.

## Features
* Wraps entire Cityworks api as of version 19.44
* Supports multiple clients/connections, or single clients
* Automatic fetching of tokens from username/password (or optionally pass token yourself)
* Easy to follow and understand mirrored namespacing of endpoints. i.e., to create a service request, `Cityworks::Ams::ServiceRequest::Create.new(params={}, client: Cityworks::Client.new).execute`
* Automatic unwrapping of responses, and ActiveRecord inspired handling of errors (i.e. to raise on an error call `.execute!`, to handle yourself call `.execute`, you can check for errors via `response.success?` and `response.errors`
* Automatic handling of DateTime coercion so you can just pass normal ruby datetimes when making requests (need to implement for responses probably also)
* Discoverability of the CW API endpoints/parameters, I.e. if you want to view the parameters for creating a service request, (types, comments, required params, etc), just do `puts Cityworks::Ams::ServiceRequest::Create::Parameters.all` - or for services/endpoints themselves, just `puts Cityworks::Ams.constants Cityworks::Ams::ServiceRequest.constants`, etc

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'cityworks'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install cityworks

## Configuration
Multiple clients (or connections), as well as single cityworks installs are supported. - You need to either provide a username and password for each Client, or you need to provide it a token.

If you are working with a single cityworks install:
If you provide the ENV variables CITYWORKS_USERNAME, CITYWORKS_PASSWORD (or just CITYWORKS_TOKEN) instead, and: CITYWORKS_SERVICES_URL, you just need to call
`Cityworks.configure {}` the first time. When you initialize a client,
Otherwise configure as below

``` ruby
Cityworks.configure do |config|
 config.username = 'MichaelBolton'
 config.password = 'password'
end
```
or
``` ruby
Cityworks.configure do |config|
 config.token = 'asdfg'
end
```

Otherwise, you need to configure a client (connection to the install) before making requests, and pass it in. The token will be fetched automatically if you provide username and password. I.E.
``` ruby
connection = Cityworks.new(
  username: 'someuser',
  password: 'somepassword',
  services_url: 'https://somedomain.com/cityworks/services',
  id: 123
)
```

id can be passed in as well if you maintain a registry of connections or whatever, so that you don't need to keep fetching tokens and initializing clients.

## Making Requests

The Cityworks api is mirrored pretty directly; for each service endpoint, there is a corresponding request class, i.e.

Cityworks::Ams::ServiceRequest::Create

To actually make a request, just initialize it, and pass in the Cityworks::Client which it belongs to, along with any parameters as keyword arguments, then execute it. i.e.
``` ruby
connection = Cityworks.new(
  username: 'someuser',
  password: 'somepassword',
  services_url: 'https://somedomain.com/cityworks/services'
)

Cityworks::Ams::ServiceRequest::ById.new({
  RequestId: 1234
}, client: connection).execute
```

Originally was going to use keyword args, but then they need to be snake cased, because otherwise ruby thinks it's a constant not a KW arg, and would have to convert back and forth when making requests/responses. Still on the fence about this so could be a breaking change in a future version, but be advised, client IS a keyword arg, the first argument is just the hash to build the params.

## Alternative request syntax when dealing with multiple clients

``` ruby
client = Cityworks.new(
  username: 'someuser',
  password: 'somepassword',
  services_url: 'https://somedomain.com/cityworks/services'
)

response = client["Ams::ServiceRequest::Create"].new({
  ProblemSid: 1234
}).execute
```

The above mainly being because passing in a client each time feels kind of bad if working with multiple clients, so wanted an alternative syntax. HOWEVER: I have taken some, uh, let's say ruby metaprogramming liberties in order to do that one. (new module is created on each request object to override the new method on the request, to auto pass in the client). Nothing inherently WRONG with doing that as far as I know, but a little weird, just FYI.

## Future stuff / todos
* Would like to cast the enum types to actual enums, i.e. Trax::Core enum https://github.com/jasonayre/trax_core - so that the apis are easier to work with (you can then use symbols or strings when initializing the enum value and easily convert it back when sending the request back to CW, as well as easily inspect the choices in each enum), but ran into some difficulties trying to do so, so not included for now.
* Responses aren't autocasting, into datetimes, for instance. Should prob do that
* Note, in order to build this quickly, I scraped the CW api docs and turned it into data that I could use to generate the endpoint classes. I was able to parse an older version of the sdk into a json-schema format, but ran into issues w the newer sdk version (also learned json schema is also really, not great at discoverability, and being used to generate code) - parsing the sdk into a better data structure (with the full, compiled, finalized data types) that could be used to create things like `Trax::Core::Enums` for the enums, and do automatic typecasting/mapping of objects and what not, would be preferable, but didn't want to burn any more time on that. Perhaps in future.

## Specs
There are some unit tests, but also added a full request spec you can test against a CW installation in the requests spec. You need to pass in env vars when running rspec if using.

## Development

After checking out the repo, run `bin/setup` to install dependencies. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/cityworks.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
