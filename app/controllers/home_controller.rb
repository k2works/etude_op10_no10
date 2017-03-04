class HomeController < ApplicationController
  def index
  end

  def calculate
    @form = BowlingGameForm.new
    @form.assign_attributes(params)
    @form.add
    render :'home/index'
  end

  def clear
    redirect_to :root
  end
end
