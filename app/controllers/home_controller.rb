class HomeController < ApplicationController
  def index
  end

  def calculate
    @game = Bowling::Game.new
    @params = throw_params
    @params.each do |k,v|
      @game.add(v.to_i)
    end
    render :'home/index'
  end

  def clear
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
