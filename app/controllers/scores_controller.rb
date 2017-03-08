class ScoresController < ApplicationController
  protect_from_forgery with: :null_session

  def index
  end

  def score
    score = BowlingGameForm.new
    score.throw01 = 1
    score.throw02 = 2
    score.throw03 = 3
    score.throw04 = 4
    score.add
    render json:score
  end

  def create
    score = BowlingGameForm.new
    render json:score
  end
end
