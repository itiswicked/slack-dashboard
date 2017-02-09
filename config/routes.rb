Rails.application.routes.draw do
  namespace :v1 do
    resources :messages, only: [:index, :create, :update, :destroy]
  end
end
