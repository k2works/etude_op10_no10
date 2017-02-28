require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module EtudeOp10No10
  class Application < Rails::Application
    # Enable rack-dev-mark
    config.rack_dev_mark.enable = !Rails.env.production?
    #
    # Customize the env string (default Rails.env)
    # config.rack_dev_mark.env = 'foo'
    #
    # Customize themes if you want to do so
    # config.rack_dev_mark.theme = [:title, :github_fork_ribbon]
    #
    # Customize inserted place of the middleware if necessary.
    # You can use either `insert_before` or `insert_after`
    # config.rack_dev_mark.insert_before SomeOtherMiddleware
    # config.rack_dev_mark.insert_after SomeOtherMiddleware

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
