TVBnB.Views.Google = Backbone.View.extend({
	initialize: function(){
		this.geocoder = new google.maps.Geocoder();
		this.location = 'new york, new york';
		if($.cookie('location')){
			this.location = $.cookie('location');
		}
		this.codeAddress();
		this.markers = {}
		this.listenTo(this.collection, 'sync', this.addAllListings);
		this.listenTo(this.collection, 'add', this.addListing);
		this.listenTo(this.collection, 'remove', this.removeListing);
		this.listenTo(this.collection, 'newSearch', this.addAllListings);
	},

	template: JST['index/google'],

	tagName: "google-view",

	createMap: function(){
		this.map = new google.maps.Map(this.$("#map-canvas")[0], this.mapOptions);
		this.addAllListings();
		google.maps.event.addListener(this.map, 'idle', this.setSearchBounds.bind(this));
	},

	codeAddress: function(){
		this.geocoder.geocode( {'address': this.location}, function(results, status){
			if(status == google.maps.GeocoderStatus.OK) {
				this.latLng = results[0].geometry.location;
				this.mapOptions = {
					center: this.latLng,
					zoom: 8
				};
			} else {
				alert('Geocode was not successful for the following reason: ' + status)
			}
		});
	},

	setSearchBounds: function(){
		this.southWest = this.map.getBounds().getSouthWest();
		this.northEast = this.map.getBounds().getNorthEast();
		var boundaries = {
			south: this.southWest.lat(),
			west: this.southWest.lng(),
			north: this.northEast.lat(),
			east: this.northEast.lng()
		};
		var options = {boundaries: boundaries};
		this.collection.trigger("newSearch", options);
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

	removeListing: function(listing){
		//find listing
		//remove listing
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