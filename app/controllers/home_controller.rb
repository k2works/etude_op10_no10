class HomeController < ApplicationController
  def index
  end

  def calculate
    @form = BowlingGameScoreService.setup_form(params)
    render :'home/index'
  end

  def clear
    redirect_to :root
  end

  def score
    score = BowlingGameForm.new
    render json:score
  end
end
