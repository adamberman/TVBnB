module Api
	class ListingsController < ApplicationController
		def create
		end

		def show
		end

		def index
			@listings = Listing.all.includes(:images)
			render :index
		end
	end
end