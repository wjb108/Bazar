class UsersController < ApiController
  skip_before_action :authenticate_user!, only: %i[index all_users ]
  # before_action only: %i[show update destroy]

  def all_users
    @all_users = User.all
    render json: @all_users, include: [:items]
  end

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user, include: [:items]
  end


  def update

    if current_user.update(user_params)
      render json: current_user
    else
      render json: current_user.errors.full_messages
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email)
  end
end

