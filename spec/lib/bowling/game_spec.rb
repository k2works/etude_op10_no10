require 'rails_helper'
include Bowling

describe Bowling::Game do
  describe '.score' do
    context 'when one throw' do
      it 'is scored' do
        g = Game.new
        g.add(5)
        expect(g.score).to eq(5)
      end
    end

    context 'when two throws' do
      it 'is scored' do
        g = Game.new
        g.add(5)
        g.add(4)
        expect(g.score).to eq(9)
      end
    end
  end

  describe '.score_for_frame' do
    context 'when four throws' do
      it 'is scored' do
        g = Game.new
        g.add(5)
        g.add(4)
        g.add(7)
        g.add(2)
        expect(g.score_for_frame(1)).to eq(9)
        expect(g.score_for_frame(2)).to eq(18)
      end
    end
  end
end