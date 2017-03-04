class HomeController < ApplicationController
  def index
  end

  def calculate
    @form = BowlingGameScoreService.new.setup_form(params)
    render :'home/index'
  end

  def clear
    redirect_to :root
  end
end
