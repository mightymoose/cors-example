class AdditionController < ApplicationController
  def add
    render json: params[:a].to_i + params[:b].to_i
  end
end
