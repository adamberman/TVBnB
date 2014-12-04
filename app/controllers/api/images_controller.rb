module Api
	class ImagesController < ApplicationController
		def create
			@image = current_listing.images.new(image_params)
			@image.img = params[:file]

			if @image.save
				flash.now[:success] = ["Image Uploaded Successfully!"]
				render json: @image
			else
				render json: @image.errors.full_messages, status: :unprocessable_entity
			end
		end

		private

		def current_listing
			if params[:listing_id]
				@listing = Listing.find(params[:listing_id])
			end
		end

		def image_params
			params.permit(:listing_id)
		end
	end
end
