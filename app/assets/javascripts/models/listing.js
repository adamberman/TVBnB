TVBnB.Models.Listing = Backbone.Model.extend({
	
	urlRoot: "/api/listings",
	
	reservations: function () {
		if (!this._reservations) {
			this._reservations = new TVBnB.Collections.Reservations([], { listing: this });
		}
		return this._reservations;
	},

	reviews: function () {
		if (!this._reviews) {
			this._reviews = new TVBnB.Collections.Reviews([], { listing: this });
		}
		return this._reviews;
	},

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