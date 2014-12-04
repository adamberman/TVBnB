TVBnB.Views.ListingShowMap = Backbone.View.extend({

	initialize: function(){
		this.mapOptions = {
			center: {lat: this.model.get('latitude'), lng: this.model.get('longitude')},
			zoom: 12
		};
	},

	template: JST['show/map'],

	className: 'map-container',

	createMap: function(){
		this.map = new google.maps.Map(this.$("#show-map-canvas")[0], this.mapOptions);
		var marker = new google.maps.Marker({
			position: this.mapOptions.center,
			map: this.map
		});
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