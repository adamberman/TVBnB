# == Schema Information
#
# Table name: listings
#
#  id          :integer          not null, primary key
#  price       :integer          not null
#  address     :string(255)      not null
#  name        :string(255)      not null
#  description :text             not null
#  user_id     :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
