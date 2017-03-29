class BowlingGameForm
  include ActiveModel::Model

  def self.attributes
    [
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
         :throw21,
         :fs01,
         :fs02,
         :fs03,
         :fs04,
         :fs05,
         :fs06,
         :fs07,
         :fs08,
         :fs09,
         :fs10,
         :score
    ]
  end

  attr_accessor *self.attributes
  attr_reader :game

  def to_hash
    self.class.attributes.inject({}) do |hash, key|
      hash.merge({ key => self.send(key) })
    end
  end

  SCORES = { 'X': 10, '9':9, '8':8, '7':7, '6':6, '5':5, '4':4, '3':3, '2':2, '1':1, 'G':0}

  def initialize
    @game = Bowling::Game.new
  end

  def assign_attributes(params)
    @throw01 = params[:throw01].to_i unless params[:throw01].nil?
    @throw02 = params[:throw02].to_i unless params[:throw02].nil?
    @throw03 = params[:throw03].to_i unless params[:throw03].nil?
    @throw04 = params[:throw04].to_i unless params[:throw04].nil?
    @throw05 = params[:throw05].to_i unless params[:throw05].nil?
    @throw06 = params[:throw06].to_i unless params[:throw06].nil?
    @throw07 = params[:throw07].to_i unless params[:throw07].nil?
    @throw08 = params[:throw08].to_i unless params[:throw08].nil?
    @throw09 = params[:throw09].to_i unless params[:throw09].nil?
    @throw10 = params[:throw10].to_i unless params[:throw10].nil?
    @throw11 = params[:throw11].to_i unless params[:throw11].nil?
    @throw12 = params[:throw12].to_i unless params[:throw12].nil?
    @throw13 = params[:throw13].to_i unless params[:throw13].nil?
    @throw14 = params[:throw14].to_i unless params[:throw14].nil?
    @throw15 = params[:throw15].to_i unless params[:throw15].nil?
    @throw16 = params[:throw16].to_i unless params[:throw16].nil?
    @throw17 = params[:throw17].to_i unless params[:throw17].nil?
    @throw18 = params[:throw18].to_i unless params[:throw18].nil?
    @throw19 = params[:throw19].to_i unless params[:throw19].nil?
    @throw20 = params[:throw20].to_i unless params[:throw20].nil?
    @throw21 = params[:throw21].to_i unless params[:throw21].nil?
  end

  def add
    @game.add(throw01) unless throw01.nil?
    @game.add(throw02) unless throw02.nil?
    @game.add(throw03) unless throw03.nil?
    @game.add(throw04) unless throw04.nil?
    @game.add(throw05) unless throw05.nil?
    @game.add(throw06) unless throw06.nil?
    @game.add(throw07) unless throw07.nil?
    @game.add(throw08) unless throw08.nil?
    @game.add(throw09) unless throw09.nil?
    @game.add(throw10) unless throw10.nil?
    @game.add(throw11) unless throw11.nil?
    @game.add(throw12) unless throw12.nil?
    @game.add(throw13) unless throw13.nil?
    @game.add(throw14) unless throw14.nil?
    @game.add(throw15) unless throw15.nil?
    @game.add(throw16) unless throw16.nil?
    @game.add(throw17) unless throw17.nil?
    @game.add(throw18) unless throw18.nil?
    @game.add(throw19) unless throw19.nil?
    @game.add(throw20) unless throw20.nil?
    @game.add(throw21) unless throw21.nil?
  end

  def score_for_frames
    @fs01 = @game.score_for_frame(1)
    @fs02 = @game.score_for_frame(2)
    @fs03 = @game.score_for_frame(3)
    @fs04 = @game.score_for_frame(4)
    @fs05 = @game.score_for_frame(5)
    @fs06 = @game.score_for_frame(6)
    @fs07 = @game.score_for_frame(7)
    @fs08 = @game.score_for_frame(8)
    @fs09 = @game.score_for_frame(9)
    @fs10 = @game.score_for_frame(10)
  end

  def score
    @score = @game.score
  end
end