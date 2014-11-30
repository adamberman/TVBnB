TVBnB.Views.ShowBooking = Backbone.View.extend({
	template: JST['show/booking'],

	className: 'booking-container',

	render: function(){
		var content = this.template({
			listing: this.model
		});
		this.$el.html(content);
		return this;
	}
})