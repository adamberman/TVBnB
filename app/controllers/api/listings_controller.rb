module Api
	class ListingsController < ApplicationController
		def create
		end

		def show
		end

		def index
			@listings = Listing.all.includes(:images, :reservations)
			render :index
		end
	end
end