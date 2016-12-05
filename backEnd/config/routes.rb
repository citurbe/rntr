Rails.application.routes.draw do
  resources :distances, only: [:create]
  resources :schools, only: [:create]
  resources :crimes, only: [:show]
  resources :apts, only: [:show]
  resources :destinations
  resources :users
  resources :sessions
  resources :getautocompletes, only: [:show]
  resources :amenities, only: [:create]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
