require 'rails_helper'

RSpec.describe BowlingGameScoreService do
  let!(:params) {
    {
        throw01:'1',
        throw02:'2',
        throw03:'3',
        throw04:'4',
        throw05:'5',
        throw06:'6',
        throw07:'7',
        throw08:'8',
        throw09:'9',
        throw10:'10',
        throw11:'11',
        throw12:'12',
        throw13:'13',
        throw14:'14',
        throw15:'15',
        throw16:'16',
        throw17:'17',
        throw18:'18',
        throw19:'19',
        throw20:'20',
        throw21:'21'
    }
  }
  let!(:score) { create(:score)}

  describe '.save_form' do
    it "creat score" do
      BowlingGameScoreService.save_form(params)
      expect(Score.all.count).to eq(2)
    end
  end

  describe '.search_form' do
    it "search score" do
      form = BowlingGameScoreService.search_form
      expect(form).not_to be_nil
    end
  end
end
