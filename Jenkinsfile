node('master') {

  stage 'Checkout'
  git url: 'https://github.com/k2works/etude_op10_no10.git'

  stage 'Prepare'
  sh "~/.rbenv/versions/2.4.0/bin/gem install bundler"
  sh "~/.rbenv/versions/2.4.0/bin/bundle install --path vendor/bundle"

  stage 'Prepare test'
  sh "~/.rbenv/versions/2.4.0/bin/bundle install"
  sh "~/.rbenv/versions/2.4.0/bin/bundle exec rake db:migrate"
  sh "~/.rbenv/versions/2.4.0/bin/bundle exec rake db:test:prepare"

  stage "Unit test"
  sh "~/.rbenv/versions/2.4.0/bin/bundle exec rake spec"

  stage "Integration test"
  sh "~/.rbenv/versions/2.4.0/bin/bundle exec rake test"

  stage "deploy"
  sh '''if ! git ls-remote heroku; then
          git remote add heroku git@heroku.com:etude-op10-no10.git
          /usr/local/heroku/bin/heroku keys:add -y
        fi'''
  sh "git push heroku master"
  sh "/usr/local/heroku/bin/heroku run rake db:migrate"
}