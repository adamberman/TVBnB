Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :users
  resource :session

  namespace :api, defaults: { format: :json } do
  	resources :listings, only: [:create, :show, :index]
  	resources :reservations, only: :create
  	resources :reviews, only: [:create, :show]
  end
end
