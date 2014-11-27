TVBnB.Collections.Listings = Backbone.Collection.extend({
	model: TVBnB.Models.Listing,
	url: "/api/listings",
	getOrFetch: function(id){
		var listing = this.get(id)
		var listings = this;
		if (!listing) {
			listing = new TVBnB.Models.Listing({id: id});
			listing.fetch({
				success: function(){
					listings.add(listing);
				}
			});
		} else {
			listing.fetch();
		}
		return listing;
	},
	search: function(boundaries, price) {
		return _(this.filter(function(model){
			return model.get('latitude') < boundaries.north &&
				model.get('latitude') > boundaries.south &&
				model.get('longitude') < boundaries.east &&
				model.get('longitude') > boundaries.west &&
				model.get('price') <= price.max &&
				model.get('price') >= price.min;
		}));		
	}
});