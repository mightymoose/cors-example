require "test_helper"

class AdditionControllerTest < ActionDispatch::IntegrationTest
  test "should get add" do
    get addition_add_url
    assert_response :success
  end
end
