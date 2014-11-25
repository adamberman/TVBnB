module Api
	class ListingsController < ApplicationController
		def create
		end

		def show
		end

		def index
			@listings = Listing.all
			render json: @listings
		end
	end
end