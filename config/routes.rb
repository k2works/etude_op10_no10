Rails.application.routes.draw do
  get 'scores' => 'scores#index'
  get  'scores/score', format: 'json'
  post 'scores/create', format: 'json'

  root 'home#index'
  post 'home/calculate'
  get  'home/clear'
end
