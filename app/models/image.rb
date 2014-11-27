class Image < ActiveRecord::Base
	validates :url, :listing, presence: true
	belongs_to :listing
end
