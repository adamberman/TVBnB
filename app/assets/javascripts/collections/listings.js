TVBnB.Collections.Listings = Backbone.Collection.extend({
	model: TVBnB.Models.Listing,
	url: "/api/listings"
})