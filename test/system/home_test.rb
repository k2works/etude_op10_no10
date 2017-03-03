require 'application_system_test_case'

class HomeTest < ApplicationSystemTestCase
  test "visiting the index" do
    # トップページを開く
    visit root_path

    # テクストが表示されているかを検証する
    assert_text 'Bowling Game Scorer'

  end
end