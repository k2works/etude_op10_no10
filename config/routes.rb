Rails.application.routes.draw do
  root 'home#index'
  post 'home/calculate'
  get  'home/clear'
end
