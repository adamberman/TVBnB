class Image < ActiveRecord::Base
	validates :listing, presence: true
	belongs_to :listing

	has_attached_file :img
  validates_attachment_content_type :img, :content_type => /\Aimage\/.*\Z/
end
