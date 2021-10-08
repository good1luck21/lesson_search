class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def search
    p "=============="
    p params[:word]
    p "=============="
    @posts = Post.where('title LIKE(?)', "%#{params[:word]}%")
    p "=============="
    p @posts.count
    p "=============="
    respond_to do |format|
      format.json {render json: @posts}
    end
  end
end
