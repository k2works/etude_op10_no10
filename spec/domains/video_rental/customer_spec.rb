require 'rails_helper'
include VideoRental

describe VideoRental::Customer do
  describe '#add_rental' do
    it 'should be rented' do
      cs = Customer.new('Taro')
      mv = VideoRental::Movie.new('Attack of the Killer Tomatoes!',Movie::REGULAR)
      rental = VideoRental::Rental.new(mv,7)
      cs.add_rental(rental)
      expect(cs.instance_variable_get :@rentals).not_to be_empty
    end
  end

  describe '#statement' do
    it 'calculate price' do
      cs = Customer.new('Taro')
      mv = VideoRental::Movie.new('Attack of the Killer Tomatoes!',Movie::REGULAR)
      rental = VideoRental::Rental.new(mv,7)
      cs.add_rental(rental)
      expect(cs.statement).to be_include '9.5'
    end

    it 'print statement' do
      cs = Customer.new('Taro')
      mv = VideoRental::Movie.new('Attack of the Killer Tomatoes!',Movie::REGULAR)
      rental = VideoRental::Rental.new(mv,7)
      cs.add_rental(rental)
      expect(cs.statement).to be_match 'Rental Record for Taro\n\tAttack of the Killer Tomatoes!\t9.5\nAmount owed is 0.0\nYou earned 1 frequent renter points'
    end
  end
end