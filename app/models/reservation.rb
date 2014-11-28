class Reservation < ActiveRecord::Base
	validates :user, :listing, :start_date, :end_date, presence: true
	belongs_to :user
	belongs_to :listing
end
