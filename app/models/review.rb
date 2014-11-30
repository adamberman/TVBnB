class Review < ActiveRecord::Base
	validates :content, :user, :listing, presence: true

	belongs_to :user
	belongs_to :listing
end
