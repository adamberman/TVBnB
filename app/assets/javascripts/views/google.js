TVBnB.Views.Google = Backbone.View.extend({

	initialize: function () {
		// start geocoder
		this.geocoder = new google.maps.Geocoder();

		// set default params if navigating directly to this view
		this.location = 'new york, ny';
		this.start_date = "";
		this.end_date = "";

		// check to see if search params have been set by cookies
		if ($.cookie('location')) {
			this.location = $.cookie('location');
		}
		if ($.cookie('start_date')) {
			this.start_date = $.cookie('start_date');
		}
		if ($.cookie('end_date')) {
			this.end_date = $.cookie('end_date');
		}

		// ensure dates are valid
		this.ensureStartAndEndDate();

		// set up data necessary for map (geocoded address, markers, listings)
		this.codeAddress();
		this.markers = {}
		this.listings = []

		this.listenTo(this.collection, 'filter', this.addAllListings);
		this.listenTo(this.collection, 'newLocation', this.changeLocation);
		this.listenTo(this.collection, 'newParams', this.changeParams);
		this.listenTo(this.collection, 'bounceCall', this.handleBounceCall);
	},

	template: JST['index/google'],

	tagName: "google-view",

	// create new instance of map, listen for when user stops moving map
	createMap: function () {
		this.map = new google.maps.Map(this.$("#map-canvas")[0], this.mapOptions);
		google.maps.event.addListener(this.map, 'idle', this.setSearch.bind(this));
	},

	// cause markers to bounce/stop (response from mouseover on listings index view)
	handleBounceCall: function (action) {
		var marker = this.markers[action.id];
		if (action.action == 'begin') {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
		if (action.action == 'end') {
			marker.setAnimation(null);
		}
	},

	ensureStartAndEndDate: function () {
		if (this.start_date == "" || this.end_date == "") {
			this.start_date = new Date();
			this.end_date = new Date();
		}
	},

	changeParams: function (params) {
		this.start_date = params.start_date;
		this.end_date = params.end_date;
		this.min_price = params.min_price;
		this.max_price = params.max_price;
	},

	codeAddress: function () {
		var that = this;

		// geocode address, start or set new location on map if successful
		this.geocoder.geocode( { 'address': this.location }, function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				that.latLng = results[0].geometry.location;
				that.mapOptions = {
					center: that.latLng,
					zoom: 12
				};
				if (that.map) {
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

	changeLocation: function (params) {
		this.location = params.location;
		this.start_date = params.start_date;
		this.end_date = params.end_date;
		this.min_price = params.min_price;
		this.max_price = params.max_price;
		this.codeAddress();
	},

	// update and store search params, then pass them to listings index view by triggering "newSearch" event on the collection
	setSearch: function () {
		this.southWest = this.map.getBounds().getSouthWest();
		this.northEast = this.map.getBounds().getNorthEast();
		var boundaries = {
			south: this.southWest.lat(),
			west: this.southWest.lng(),
			north: this.northEast.lat(),
			east: this.northEast.lng()
		};
		this.ensureStartAndEndDate();
		var options = {
			boundaries: boundaries,
			start_date: this.start_date,
			end_date: this.end_date,
			min_price: this.min_price || 0,
			max_price: this.max_price || 1000
		};
		this.collection.trigger("newSearch", options);
	},

	addListing: function (listing) {
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
		this.listings.push(listing);
		this.markers[listingId] = marker;
	},

	removeListing: function (listing) {
		var marker = this.markers[listing.id];
		marker.setMap(null);
		delete this.markers[listing.id];
	},

	addAllListings: function (subCollection) {
		this.deleteAllListings();
		subCollection.each(this.addListing.bind(this));
	},

	deleteAllListings: function () {
		var that = this;
		this.listings.forEach(function(listing){
			that.removeListing(listing)
		});
		this.listings = [];
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})