Rails.application.routes.draw do
    resources :categories do
      resources :items
    end

  get "/allusers", to: "users#all_users"
  root to:"home#index"
  devise_for :users, controllers: { registrations: 'registrations' }

  namespace :api do
    namespace :v1 do
      get 'post/index'
      post :auth, to: 'authentication#create'
      get  '/auth' => 'authentication#fetch'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
