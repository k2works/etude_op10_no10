Rails.application.routes.draw do
  resources :beer_list, only: [:index]
end
