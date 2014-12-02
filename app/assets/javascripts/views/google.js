TVBnB.Views.Google = Backbone.View.extend({
	initialize: function(){
		this.geocoder = new google.maps.Geocoder();
		this.location = 'san francisco, ca';
		this.start_date = "";
		this.end_date = "";
		this.min_price = 0;
		this.max_price = 1000;
		if($.cookie('location')){
			this.location = $.cookie('location');
		}
		if($.cookie('start_date')){
			this.start_date = $.cookie('start_date');
		}
		if($.cookie('end_date')){
			this.end_date = $.cookie('end_date');
		}
		this.ensureStartAndEndDate();
		this.codeAddress();
		this.markers = {}
		// this.listenTo(this.collection, 'sync', this.addAllListings);
		this.listenTo(this.collection, 'add', this.addListing);
		this.listenTo(this.collection, 'remove', this.removeListing);
		// this.listenTo(this.collection, 'filter', this.addAllListings);
		// this.listenTo(this.collection, 'newLocation', this.changeLocation);
	},

	template: JST['index/google'],

	tagName: "google-view",

	createMap: function(){
		this.map = new google.maps.Map(this.$("#map-canvas")[0], this.mapOptions);
		google.maps.event.addListener(this.map, 'idle', this.setSearch.bind(this));
	},

	ensureStartAndEndDate: function(){
		if(this.start_date == "" || this.end_date == ""){
			this.start_date = new Date();
			this.end_date = new Date();
		}
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
					that.setSearch();
				} else {
					that.createMap();
				}
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

	setSearch: function(){
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
			start_date: this.start_date,
			end_date: this.end_date,
			min_price: this.min_price,
			max_price: this.max_price
		};
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