TVBnB.Views.ListingShowMap = Backbone.View.extend({

	initialize: function(){
		this.mapOptions = 
	}

	template: JST['show/map.jst.ejs'],

	className: 'map-container',

	createMap: function(){
		this.map = new google.maps.Map(this.$("#show-map-canvas")[0], this.mapOptions);
		//add marker
	},

	render: function(){
		var content = this.template();
		this.$el.html(content);
		setTimeout(function(){
			this.createMap();
		}.bind(this), 0);
		return this;
	}
})