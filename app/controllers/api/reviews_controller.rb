module Api
	class ReviewsController < ApplicationController
		def create
			@review = current_listing.reviews.new(review_params)
			@review.user_id = current_user.id

			if @review.save
				render json: @review
			else
				render json: @review.errors.full_messages, status: :unprocessable_entity
			end
		end

		def show
			@review = Review.find(params[:id])
			render :show
		end

		private

		def current_listing
			if params[:id]
				@review = Review.find(params[:id])
				@listing = @review.listing
			elsif params[:review]
				@listing = Listing.find(params[:review][:listing_id])
			end
		end

		def review_params
			params.require(:review).permit(:listing_id, :content)
		end		
	end
end