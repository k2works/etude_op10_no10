class ScoresController < ApplicationController
  protect_from_forgery with: :null_session

  def index
  end

  def calculate
    form = BowlingGameScoreService.setup_calculate_form(throw_params)
    render json:form
  end

  def save
    if BowlingGameScoreService.save_form(throw_params)
      flash.notice = 'スコアを保存しました'
      form = BowlingGameScoreService.search_form
      render json:form
    else
      flash.alert = 'スコアを保存できませんでした'
    end
  end

  def search
    form = BowlingGameScoreService.search_form
    render json:form
  end

  def destroy
    Score.destroy_all
    form = BowlingGameScoreService.setup_calculate_form(throw_params)
    render json:form
  end

  private
  def throw_params
    params.require(:bowling_game_form).permit(
        :throw01,
        :throw02,
        :throw03,
        :throw04,
        :throw05,
        :throw06,
        :throw07,
        :throw08,
        :throw09,
        :throw10,
        :throw11,
        :throw12,
        :throw13,
        :throw14,
        :throw15,
        :throw16,
        :throw17,
        :throw18,
        :throw19,
        :throw20,
        :throw21
    )
  end
end
