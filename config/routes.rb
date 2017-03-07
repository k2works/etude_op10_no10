Rails.application.routes.draw do
  root 'home#index'
  post 'home/calculate'
  get  'home/clear'
  post  'home/score', format: 'json'
  get  'home/score', format: 'json'
end
