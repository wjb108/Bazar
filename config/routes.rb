Rails.application.routes.draw do
  # resources :users do
    resources :items do
      resources :categories
    end
  # end
  get "/allusers", to: "users#all_users"
  
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
