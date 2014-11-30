TVBnB.Models.Listing = Backbone.Model.extend({
	urlRoot: "/api/listings",
	
	reservations: function(){
		if(!this._reservations){
			this._reservations = new TVBnB.Collections.Reservations([], { listing: this });
		}
		return this._reservations;
	},

	parse: function(response){
		if(response.reservations){
			this.reservations().set(response.reservations, { parse: true });
			delete response.reservations;
		}
		return response;
	}
})