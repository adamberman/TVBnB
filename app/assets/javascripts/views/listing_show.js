TVBnB.Views.ListingShow = Backbone.CompositeView.extend({
	initialize: function(){
		this.listenTo(this.model, 'sync', this.ensureCarousel);
		this.listenTo(this.model, 'sync', this.render);
		this._subviews = [];
	},

	template: JST['show/main'],

	className: 'show-main',

	ensureCarousel: function(){
		var carousel = new TVBnB.Views.ShowCarousel({
			model: this.model
		});
		var hasCarousel = false;
		for(var i = 0; i < this._subviews.length; i++){
			if(this._subviews[i] == carousel){
				hasCarousel = true;
			}
		}
		if(!hasCarousel){
			this.addSubview(".large-carousel", carousel);
		}
	},

	render: function(){
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})