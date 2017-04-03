Rails.application.routes.draw do
  get 'vue/index'

  get 'scores' => 'scores#index'
  post 'scores/calculate', format: 'json'
  post 'scores/save', format: 'json'
  post 'scores/search', format: 'json'
  post 'scores/destroy', format: 'json'

  root 'home#index'
  post 'home/calculate'
  get  'home/clear'
end
