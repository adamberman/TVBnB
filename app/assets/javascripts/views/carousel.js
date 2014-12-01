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
		this.$active.addClass('active-carousel');
	},

	deactivate: function(){
		this.$active.removeClass('active-carousel');
	},

	next: function(){
		if(this.transitioning){
			return;
		}
		this.transitioning = true;
		this.$active = this.$divItems.eq(activeIndex);
		this.$active.addClass('right-carousel');
		if(this.activeIndex + 1 >= this.$divItems.length) {
			this.activeIndex = 0;
		} else {
			this.activeIndex ++;
		}
		this.$next = this.$divItems.eq(activeIndex);
		this.$next.addClass('left-carousel');
		var that = this;
		setTimeout(function(){
			that.$next.removeClass('left-carousel');
		}, 0);
		this.$el.one('transitionend', 'div', function(){
			that.$active.removeClass();
			that.transitioning = false;
		})
		this.$next.addClass('active-carousel')
	},

	back: function(){
		if(this.transitioning){
			return;
		}
		this.transitioning = true;
		this.$active = this.$divItems.eq(activeIndex);
		this.$active.addClass('left-carousel');
		if(this.activeIndex - 1 < 0){
			this.activeIndex = this.$divItems.length - 1;
		} else {
			this.activeIndex --;
		}
		this.$next = this.$divItems.eq(activeIndex);
		this.$next.addClass('right-carousel');
		var that = this;
		setTimeout(function(){
			that.$next.removeClass('right-carousel');
		}, 0);
		this.$el.one('transitionend', 'div', function(){
			that.$active.removeClass();
			that.transitioning = false;
		})
		this.$next.addClass('active-carousel')
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