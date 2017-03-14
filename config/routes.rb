Rails.application.routes.draw do
  get 'vue/index'

  get 'scores' => 'scores#index'
  post 'scores/calculate', format: 'json'

  root 'home#index'
  post 'home/calculate'
  get  'home/clear'
end
