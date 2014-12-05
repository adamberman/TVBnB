module Api
	class ReservationsController < ApplicationController
		def create
			@reservation = current_listing.reservations.new(reservation_params)
			@reservation.user_id = current_user.id
			debugger

			if @reservation.save
				flash.now[:success] = ["You have successfully booked this listing!"]
				render json: @reservation
			else
				render json: @reservation.errors.full_messages, status: :unprocessable_entity
			end
		end

		private

		def current_listing
			if params[:id]
				@reservation = Reservation.find(params[:id])
				@listing = @reservation.listing 
			elsif params[:reservation]
				@listing = Listing.find(params[:reservation][:listing_id])
			end
		end

		def reservation_params
			params.require(:reservation).permit(:listing_id, :start_date, :end_date)
		end
	end
end
