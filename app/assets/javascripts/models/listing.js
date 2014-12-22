TVBnB.Models.Listing = Backbone.Model.extend({
	
	urlRoot: "/api/listings",
	
	// sets and returns collection of reservations belonging to the listing
	reservations: function () {
		if (!this._reservations) {
			this._reservations = new TVBnB.Collections.Reservations([], { listing: this });
		}
		return this._reservations;
	},

	// sets and returns a collection of reviews belonging to the listing
	reviews: function () {
		if (!this._reviews) {
			this._reviews = new TVBnB.Collections.Reviews([], { listing: this });
		}
		return this._reviews;
	},

	// removes responses and reviews from being a property of the listing and calls the methods setting the data as collections
	parse: function (response) {
		if (response.reservations) {
			this.reservations().set(response.reservations, { parse: true });
			delete response.reservations;
		}
		if (response.reviews) {
			this.reviews().set(response.reviews, { parse: true });
			delete response.reviews;
		}
		return response;
	}
})