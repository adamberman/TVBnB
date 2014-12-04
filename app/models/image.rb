class Image < ActiveRecord::Base
	validates :url, :listing, presence: true
	belongs_to :listing

	has_attached_file :img, :styles => { :medium => "300x300>", :thumb => "100x100>" }
  validates_attachment_content_type :img, :content_type => /\Aimage\/.*\Z/
end
