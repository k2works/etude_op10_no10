class HomeController < ApplicationController
  def index
    @form = BowlingGameScoreService.search_form
  end

  def calculate
    if params[:save]
      if BowlingGameScoreService.save_form(throw_params)
        flash.notice = 'スコアを保存しました'
        redirect_to :root
      else
        flash.alert = 'スコアを保存できませんでした'
        render :'home/index'
      end
    else
      @form = BowlingGameScoreService.setup_form(throw_params)
      render :'home/index'
    end
  end

  def clear
    Score.destroy_all
    redirect_to :root
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
