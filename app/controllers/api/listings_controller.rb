module Api
	class ListingsController < ApplicationController
		def create
			@listing = current_user.listings.new(listing_params)

			if @listing.save
				flash.now[:success] = ["You have successfully listed your propert!"]
				render :show
			else
				render json: @listing.errors.full_messages, status: :unprocessable_entity
			end
		end

		def show
			@listing = Listing.find(params[:id])
			render :show
		end

		def index
			@listings = Listing.all.includes(:images, :reservations)
			render :index
		end

		private

		def listing_params
			params.require(:listing).permit(:price, :address, :name, :description)
		end
	end
end