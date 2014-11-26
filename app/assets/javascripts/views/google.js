TVBnB.Views.Google = Backbone.View.extend({
	initialize: function(){
		this.mapOptions = {
			center: new google.maps.LatLng(-34.397, 150.644),
			zoom: 8
		};
	},
	template: JST['index/google'],
	tagName: "google-view",
	onRender: function(){
		Backbone.CompositeView.prototype.onRender.call(this);
		this.loadScript();
	},
	createMap: function(){
		this.map = new google.maps.Map(this.$("#map-canvas")[0], this.mapOptions);
	},
	render: function(){
		var content = this.template();
		this.$el.html(content);
		setTimeout(function(){
			this.createMap();
		}.bind(this), 0)
		return this;
	}
})