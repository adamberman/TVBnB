TVBnB.Collections.Listings = Backbone.Collection.extend({

	model: TVBnB.Models.Listing,

	url: "/api/listings",

	getOrFetch: function (id) {
		var listing = this.get(id)
		var listings = this;
		if (!listing) {
			listing = new TVBnB.Models.Listing({ id: id });
			listing.fetch({
				success: function () {
					listings.add(listing);
				}
			});
		} else {
			listing.fetch();
		}
		return listing;
	},

	//parent method for calling various search methods, returns sub-collection of listings
	search: function (boundaries, min_price, max_price, start_date, end_date) {
		var collection = this._inBoundaries(boundaries);
		collection = this._inPrice(collection, min_price, max_price);
		return this._searchD(collection, start_date, end_date);
	},

	//checks if the listings in the current collection are within the map boundaries
	_inBoundaries: function(boundaries) {
		return _(this.filter(function(model) {
			return model.get('latitude') < boundaries.north &&
				model.get('latitude') > boundaries.south &&
				model.get('longitude') < boundaries.east &&
				model.get('longitude') > boundaries.west;
		}));
	},

	//checks if the listings in the current sub-collection are within the given price range
	_inPrice: function (collection, min_price, max_price) {
		return _(collection.filter(function(model) {
			return model.get('price') <= max_price &&
				model.get('price') >= min_price;
		}));		
	},

	//checks if the listings in the current sub-collection are within the given date range
	_searchD: function(collection, start_date, end_date) {
		return _(collection.filter(function(model){
			var overlap = false;
			for(var i = 0; i < model.reservations().length; i++){
				var start = new Date(model.reservations().models[i].get(0) + " PST");
				var end = new Date(model.reservations().models[i].get(1) + " PST");
				var resStart = new Date(start_date + " PST");
				var resEnd = new Date(end_date + " PST");
				if((resStart >= start && resStart <= end) ||
					(resEnd >= start && resEnd <= end) ||
					(resStart <= start && resEnd >= end)){
					overlap = true;
				}
			}
			return !overlap;
		}));
	}
});