module Bowling
  class Game
    def initialize
      @its_score = 0
    end

    def score
      @its_score
    end

    def add(pins)
      @its_score += pins
    end

    def score_for_frame(frame)
      0
    end
  end
end