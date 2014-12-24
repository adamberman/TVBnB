TVBnB.Views.ListingsItem = Backbone.CompositeView.extend({
	className: 'col-6 row-space-1',

	template: JST['index/listings_item'],

	initialize: function(){
		this.addCarousel();
	},

	events: {
		'mouseenter div.listing': 'handleMouseEnter',
		'mouseleave div.listing': 'handleMouseLeave' 
	},

	addCarousel: function(){
		var carousel = new TVBnB.Views.Carousel({
			model: this.model
		});
		this.addSubview('.carousel-container', carousel);
	},

	// trigger mouseAction to begin bounce when the mouse enters the listing
	handleMouseEnter: function(){
		this.model.trigger('mouseAction', {action: 'begin', id: this.model.id});
	},

	// trigger mouseAction to end bounce when the mouse exits the listing
	handleMouseLeave: function(){
		this.model.trigger('mouseAction', {action: 'end', id: this.model.id});
	},

	render: function() {
		var content = this.template({
			listing: this.model,
			id: this.model.id
		});
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})