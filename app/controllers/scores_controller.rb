class ScoresController < ApplicationController
  protect_from_forgery with: :null_session

  def index
  end

  def calculate
    form = BowlingGameScoreService.setup_calculate_form(params)
    render json:form
  end
end
