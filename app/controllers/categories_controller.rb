class CategoriesController < ApiController
  skip_before_action :authenticate_user!, only: %i[index]
  # before_action only: %i[show update destroy]
  def index
    @categories = Category.all
    render json: @categories
  end

  def show
    @category = Category.find(params[:id])
    render json: @category
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      render json: @category
    else
      render json: @category.errors
    end
  end

  def update
    @category = Category.find(params[:id])

    if @category.update(category_params)
      render json: @category
    else
      render json: @category.errors
    end
  end

  def destroy
    @category = Category.find(params[:id])
    @category.destroy
  end

  private

  def category_params
    params.require(:category).permit(:name)
  end
end
