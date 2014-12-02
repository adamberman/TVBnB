TVBnB.Views.Google = Backbone.View.extend({
	initialize: function(){
		this.geocoder = new google.maps.Geocoder();
		this.location = 'san francisco, ca';
		if($.cookie('location')){
			this.location = $.cookie('location');
		}
		this.codeAddress();
		this.markers = {}
		// this.listenTo(this.collection, 'sync', this.addAllListings);
		this.listenTo(this.collection, 'add', this.addListing);
		this.listenTo(this.collection, 'remove', this.removeListing);
		// this.listenTo(this.collection, 'filter', this.addAllListings);
		this.listenTo(this.collection, 'newLocation', this.changeLocation);
	},

	template: JST['index/google'],

	tagName: "google-view",

	createMap: function(){
		this.map = new google.maps.Map(this.$("#map-canvas")[0], this.mapOptions);
		// this.addAllListings();
		google.maps.event.addListener(this.map, 'idle', this.setSearchBounds.bind(this));
	},

	codeAddress: function(){
		var that = this;
		this.geocoder.geocode( {'address': this.location}, function(results, status){
			if(status == google.maps.GeocoderStatus.OK) {
				that.latLng = results[0].geometry.location;
				that.mapOptions = {
					center: that.latLng,
					zoom: 10
				};
				if(that.map){
					that.map.setCenter(that.latLng);
				} else {
					that.createMap();
				}
				that.setSearchBounds();
			} else {
				alert('Geocode was not successful for the following reason: ' + status)
			}
		});
	},

	changeLocation: function(params){
		this.location = params.location;
		this.start_date = params.start_date;
		this.end_date = params.end_date;
		this.price_min = params.price_min;
		this.price_max = params.price_max;
		this.codeAddress();
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
		var options = {
			boundaries: boundaries,
			start_date: this.start_date || "",
			end_date: this.end_date || "",
			price_min: this.price_min || "",
			price_max: this.price_max || ""
		};
		debugger;
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
		var marker = this.markers[listing.id];
		marker.setMap(null);
		delete this.markers[carListing.id];
	},

	addAllListings: function(subCollection){
		this._activeMarkers = subCollection;
		this.activeMarkers.each(this.addListing.bind(this));
	},

	render: function(){
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})