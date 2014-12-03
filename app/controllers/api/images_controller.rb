module Api
	class ImagesController < ApplicationController
		def create
			@image = current_listing.images.new(image_params)

			if @image.save
				flash.now[:success] = ["Image Uploaded Successfully!"]
			else
				render json: @image.errors.full_messages, status: :unprocessable_entity
			end
		end

		private

		def current_listing
			if params[:image]
				@listing = Listing.find(params[:image][:listing_id])
			end
		end

		def reservation_params
			params.require(:image).permit(:listing_id, :url, :img)
		end
	end
end
