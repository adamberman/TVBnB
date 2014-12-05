TVBnB.Collections.Reservations = Backbone.Collection.extend({
	
	model: TVBnB.Models.Reservation,

	url: "/api/reservations",

	getOrFetch: function (id) {
		var reservation = this.get(id)
		var reservations = this;
		if (!reservation) {
			reservation = new TVBnB.Models.Reservation({id: id});
			reservation.fetch({
				success: function() {
					reservations.add(reservation);
				}
			});
		} else {
			reservation.fetch();
		}
		return reservation;
	},
})