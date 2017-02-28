module Bowling
  class Game
    def initialize
      @first_throw_in_frame = true
      @its_current_frame = 1
      @its_scorer = Scorer.new
    end

    def score
      score_for_frame(@its_current_frame)
    end

    def add(pins)
      @its_scorer.add_throw(pins)
      adjust_current_frame(pins)
    end

    def score_for_frame(the_frame)
      @its_scorer.score_for_frame(the_frame)
    end

    private
    def adjust_current_frame(pins)
      if @first_throw_in_frame
        if !adjust_frame_for_strike(pins)
          @first_throw_in_frame = false
        end
      else
        @first_throw_in_frame = true
        advance_frame
      end
    end

    def adjust_frame_for_strike(pins)
      if pins == 10
        advance_frame
        true
      else
        false
      end
    end

    def advance_frame
      @its_current_frame = [10,@its_current_frame+1].min
    end
  end
end