require 'application_system_test_case'

class ScoreTest < ApplicationSystemTestCase
  test "visiting the index" do
    visit_root_path

    assert_text 'ReactJS Implement'
  end

  test "calculate throw sum when perfect game for react form" do
    visit_root_path

    set_all_same_throw_for_react('X') do
      i.even? ? (select '', from: current_throw) : (select 'X', from: current_throw)
      select 'X', from: current_throw if i == 20
    end

    click_on 'Calculate'

    assert has_field?('fs10', with: '300')
  end

  test "calculate throw sum when all garter for react form" do
    visit_root_path

    set_all_same_throw_for_react('G')

    click_on 'Calculate'

    assert has_field?('fs10', with: '0')
  end

  test "calculate thrwo sum when sample game for react form" do
    visit_root_path

    throws = [
        {'1': 1},
        {'4': 4},
        {'4': 4},
        {'5': 5},
        {'6': 6},
        {'4': 4},
        {'5': 5},
        {'5': 5},
        {'X': 10},
        {'': nil},
        {'G': 0},
        {'1': 1},
        {'7': 7},
        {'3': 3},
        {'6': 6},
        {'4': 4},
        {'X': 10},
        {'': nil},
        {'2': 2},
        {'8': 8},
        {'6': 6}
    ]
    21.times do |i|
      i+=1
      current_throw = 'throw'+ format("%02d", i)
      select throws[i-1].keys[0].to_s, from: current_throw
    end

    click_on 'Calculate'

    assert has_field?('fs10', with: '133')
  end


  private
  def visit_root_path
    visit scores_path
  end

  def set_all_same_throw(throw)
    21.times do |i|
      i+=1
      current_throw = get_current_throw_for_select(i)
      select throw, from: current_throw
    end
  end

  def set_all_same_throw_for_react(throw)
    21.times do |i|
      i+=1
      current_throw = 'throw'+ format("%02d", i)
      select throw, from: current_throw
    end
  end


  def get_current_throw_for_select(i)
    'bowling_game_form[throw'+ format("%02d", i) +']'
  end
end