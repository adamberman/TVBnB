TVBnB.Views.ListingShow = Backbone.CompositeView.extend({
	initialize: function(){
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

	render: function(){
		var content = this.template();
		var that = this;
		this.$el.html(content);
		setTimeout(function(){
			that.addCarousel();
		}, 0)
		this.attachSubviews();
		return this;
	}
})