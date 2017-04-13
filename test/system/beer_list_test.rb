require 'application_system_test_case'

class BeerListTest < ApplicationSystemTestCase
  test "visiting the index" do
    visit beer_list_index_path

    assert_text 'Beer List'
  end

  test "add item to list" do
    visit beer_list_index_path

    fill_in with: 'Beer'

    click_on 'Add'

    assert_text 'Beer'
  end
end