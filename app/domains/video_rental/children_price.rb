module VideoRental
  class ChildrenPrice
    require 'video_rental/default_price'
    include DefaultPrice

    def charge(days_rented)
      result = 1.5
      result += (days_rented - 3) * 1.5 if days_rented > 3
      result
    end
  end
end