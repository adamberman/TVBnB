TVBnB.Views.Carousel = Backbone.View.extend({
	initialize: function(){
		this.urls = options.urls;
		this.activeIndex = 0;
	},

	events {
		'click .slide-right': 'next',
		'click .slide-left': 'back'
	},

	template: JST['index/carousel'],

	activate: function(){
		this.$active = this.$divItems.eq(activeIndex);
		this.$active.addClass('active');
	},

	deactivate: function(){
		this.$active.removeClass('active');
	},

	next: function(){
		this.deactivate();
		if(this.activeIndex + 1 >= this.$divItems.length) {
			this.activeIndex = 0;
		} else {
			this.activeIndex ++;
		}
		this.activate();
	},

	back: function(){
		this.deactivate();
		if(this.activeIndex - 1 < 0){
			this.activeIndex = this.$divItems.length - 1;
		} else {
			this.activeIndex --;
		}
		this.activate();
	},

	render: function(){
		var content = this.template({
			urls: this.urls
		});
		this.$el.html(content)
		this.$divItems = this.$el.find('.item-carousel-img');
		this.activate();
		return this;
	}
})


	// template: JST['index/carousel'],

	// initCarousel: function(){
	// 	this.$('.item-carousel').slick({
	// 		dots: true,
	// 		infinite: true,
	// 		speed: 500,
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1
	// 	});
	// },

	// render: function(){
	// 	var content = this.template({
	// 		listing: this.model
	// 	});
	// 	this.$el.html(content);
	// 	this.initCarousel();
	// 	return this;
	// }