module Bowling
  class Frame
    def initialize
      @its_score = 0
    end

    def get_score
      @its_score
    end

    def add(pins)
      @its_score = pins
    end
  end
end