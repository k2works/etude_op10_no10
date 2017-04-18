# == Route Map
#
#              Prefix Verb URI Pattern                    Controller#Action
#                root GET  /                              bowling_game_scores#index
#     beer_list_index GET  /beer_list(.:format)           beer_list#index
# bowling_game_scores GET  /bowling_game_scores(.:format) bowling_game_scores#index
#

Rails.application.routes.draw do
  root 'bowling_game_scores#index'

  resources :beer_list, only: [:index]
  resources :bowling_game_scores, only: [:index]
end
