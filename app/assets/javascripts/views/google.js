TVBnB.Views.Google = Backbone.View.extend({
	initialize: function(){
		this.mapOptions = {
			center: new google.maps.LatLng(-34.397, 150.644),
			zoom: 8
		};
		this.markers = {}
		this.listenTo(this.collection, 'sync', this.addAllListings);
		this.listenTo(this.collection, 'add', this.addListing);
	},

	template: JST['index/google'],

	tagName: "google-view",

	createMap: function(){
		this.map = new google.maps.Map(this.$("#map-canvas")[0], this.mapOptions);
		this.addAllListings();
		google.maps.event.addListener(this.map, 'idle', this.getMapBounds.bind(this));
	},

	getMapBounds: function(){
		console.log(this.map.getBounds());
	},

	addListing: function(listing){
		var listingId = listing.id;
		var latitude = listing.get('latitude');
		var longitude = listing.get('longitude');
		var content = listing.get('title');
		var pos = new google.maps.LatLng(latitude, longitude);
		var marker = new google.maps.Marker({
			position: pos,
			map: this.map,
			title: content
		});
		this.markers[listingId] = marker;
	},
	
	addAllListings: function(){
		this.collection.each(this.addListing.bind(this));
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