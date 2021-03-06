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

class Listing < ActiveRecord::Base
	validates :price, :address, :name, :description, :user, presence: true
	belongs_to :user
	has_many :images, dependent: :destroy
	has_many :reservations, dependent: :destroy
	has_many :reviews, dependent: :destroy

	geocoded_by :address
	after_validation :geocode
end
