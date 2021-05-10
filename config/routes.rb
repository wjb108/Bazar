Rails.application.routes.draw do
    resources :categories
    resources :items


  get "/allusers", to: "users#all_users"
  get "/users/:id", to: "users#show"
  put "/users/:id", to: "users#update"
  devise_for :users, controllers: { registrations: 'registrations' }

  namespace :api do
    namespace :v1 do
      post :auth, to: 'authentication#create'
      get  '/auth' => 'authentication#fetch'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
