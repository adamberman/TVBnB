TVBnB.Views.Carousel = Backbone.View.extend({
	initialize: function(){
		this.urls = this.model.get('urls');
		this.activeIndex = 0;
	},

	events: {
		'click .slide-right': 'next',
		'click .slide-left': 'back',
		'click img': 'goToShowPage'
	},

	template: JST['index/carousel'],

	activate: function(){
		this.$active = this.$divItems.eq(this.activeIndex);
		this.$active.addClass('active-carousel');
	},

	deactivate: function(){
		this.$active.removeClass('active-carousel');
	},

	goToShowPage: function(){
		$('.active-carousel').hide('explode', { pieces: 9 }, 500);
		Backbone.history.navigate('listings/' + this.model.id, { trigger: true }), 500);
	},

	next: function(){
		this.$active = this.$divItems.eq(this.activeIndex);
		this.$active.removeClass('active-carousel');
		this.$active.addClass('inactive-carousel');
		if(this.activeIndex + 1 >= this.$divItems.length) {
			this.activeIndex = 0;
		} else {
			this.activeIndex ++;
		}
		this.$next = this.$divItems.eq(this.activeIndex);
		this.$next.removeClass('inactive-carousel')
		this.$next.addClass('active-carousel');
	},

	back: function(){
		this.$active = this.$divItems.eq(this.activeIndex);
		this.$active.removeClass('active-carousel');
		this.$active.addClass('inactive-carousel');
		if(this.activeIndex - 1 < 0){
			this.activeIndex = this.$divItems.length - 1;
		} else {
			this.activeIndex --;
		}
		this.$next = this.$divItems.eq(this.activeIndex);
		this.$next.removeClass('inactive-carousel')
		this.$next.addClass('active-carousel');
	},

	render: function(){
		var content = this.template({
			id: this.model.id,
			urls: this.urls
		});
		this.$el.html(content)
		this.$divItems = this.$el.find('.item-carousel-img');
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