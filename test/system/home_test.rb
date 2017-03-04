require 'application_system_test_case'

class HomeTest < ApplicationSystemTestCase
  test "visiting the index" do
    visit_root_path

    assert_text 'Bowling Game Scorer'
  end

  test "calculate throw sum when perfect game" do
    visit_root_path

    set_all_same_throw('X')

    click_on '計算する'

    assert has_field?('throw_sum', with: '300')
  end

  test "calculate throw sum when all garter" do
    visit_root_path

    set_all_same_throw('G')

    click_on '計算する'

    assert has_field?('throw_sum', with: '0')
  end

  private
  def visit_root_path
    visit root_path
  end

  def set_all_same_throw(throw)
    21.times do |i|
      i+=1
      current_throw = 'throw'+ format("%02d", i)
      select throw, from: current_throw
    end
  end
end