Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :users, except: :show
  resource :session

  namespace :api, defaults: { format: :json } do
  	resources :listings, only: [:create, :show, :index]
  	resources :reservations, only: :create
  	resources :reviews, only: [:create, :show]
  	resources :users, only: :show
  	resources :image, only: :create
  end
end
