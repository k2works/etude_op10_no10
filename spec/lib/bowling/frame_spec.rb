require 'rails_helper'
include Bowling

describe Bowling::Frame do
  context 'when one throw' do
    it 'is scored' do
      f = Frame.new
      expect(f.get_score).to eq(0)
    end
  end
end