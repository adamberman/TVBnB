TVBnB.Views.ListingsItem = Backbone.CompositeView.extend({
	className: 'col-6 row-space-1',
	template: JST['index/listings_item'],
	initialize: function(){
		this.addCarousel();
	},
	addCarousel: function(){
		var carousel = new TVBnB.Views.Carousel({
			urls: this.model.get('urls')
		});
		this.addSubview('.carousel-container', carousel);
	},
	render: function() {
		var content = this.template({listing: this.model});
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})