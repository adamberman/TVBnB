TVBnB.Views.OpeningMain = Backbone.CompositeView.extend({
	initialize: function(){
		this.addCarousel();
		this.addSearch();
	},

	template: JST['opening/main'],

	className: 'opening-main',

	addCarousel: function(){
		var carousel = new TVBnB.Views.OpeningCarousel();
		this.addSubview('.opening-carousel', carousel);
	},

	addSearch: function(){
		var search = new TVBnB.Views.OpeningSearch();
		this.addSubview('.opening-search-container', search);
	},

	render: function(){
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})