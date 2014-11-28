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
	search: function(boundaries, price, date){
		return this._searchD(this._searchBP(boundaries, price), date);
	},

	_searchBP: function(boundaries, price) {
		return _(this.filter(function(model){
			return model.get('latitude') < boundaries.north &&
				model.get('latitude') > boundaries.south &&
				model.get('longitude') < boundaries.east &&
				model.get('longitude') > boundaries.west &&
				model.get('price') <= price.max &&
				model.get('price') >= price.min;
		}));		
	},

	_searchD: function(collection, date) {
		return _(collection.filter(function(model){
			debugger;
			var overlap = false;
			for(var i = 0; i < model.get('reservations').length; i++){
				var start = new Date(model.get('reservations')[i][0] + " PST");
				var end = new Date(model.get('reservations')[i][1] + " PST");
				if((date.start >= start && date.start <= end) ||
					(date.end >= start && date.start <= end) ||
					(date.start <= start && date.end >= end)){
					overlap = true;
				}
			}
			return !overlap;
		}));
	}
});