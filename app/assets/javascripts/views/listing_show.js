TVBnB.Views.ListingShow = Backbone.CompositeView.extend({
	initialize: function(){
		this.listenTo(this.model, 'sync', this.addCarousel);
		this.listenTo(this.model, 'sync', this.addInformation);
		this.listenTo(this.model, 'sync', this.addBooking);
		this.listenTo(this.model, 'sync', this.render);
	},

	template: JST['show/main'],

	className: 'show-main',

	addCarousel: function(){
		var carousel = new TVBnB.Views.ShowCarousel({
			model: this.model
		});
		this.addSubview(".large-carousel", carousel);
	},

	addInformation: function(){
		var information = new TVBnB.Views.ShowInformation({
			model: this.model
		});
		this.addSubview(".information", information);
	},

	addBooking: function(){
		var booking = new TVBnB.Views.ShowBooking({
			model: this.model
		});
		this.addSubview(".booking", booking);
	},

	render: function(){
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})