class ItemsController < ApiController
  skip_before_action :authenticate_user!, only: %i[index show]
  # before_action only: %i[show update destroy]
  
  def index
    @items = Item.all
    render json: @items
  end

  def show
    @item = Item.find(params[:id])
    render json: @item
  end

  def create
    @item = current_user.items.build(item_params)
    if @item.save
      render json: @item
    else
      render json: @item.errors
    end
  end

  def update
    @item = Item.find(params[:id])

    if @item.user == current_user && @item.update(item_params)
      render json: @item
    else
      render json: @item.errors
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
  end

  private

  def item_params
    params.require(:item).permit(:title, :short_description, :long_description, :price, :img_url)
  end
end
