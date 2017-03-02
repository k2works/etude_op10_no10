require 'application_system_test_case'

class HomeTest < ApplicationSystemTestCase
  test "visiting the index" do
    # トップページを開く
    visit root_path

    # テクストが表示されているかを検証する
    assert_text 'Hello, React!'

    # nameにReactが入力されていることを検証する
    assert has_field?('name', with: 'React')

    # nameに入力できることを検証する
    fill_in 'Say hello to', with: 'すごーい'
  end
end