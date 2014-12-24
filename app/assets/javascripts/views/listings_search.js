TVBnB.Views.ListingsSearch = Backbone.View.extend({

	initialize: function(){
		this.location = '';
		if($.cookie('location')){
			this.location = $.cookie('location');
		}
		if($.cookie('start_date')){
			this.start_date = $.cookie('start_date');
		}
		if($.cookie('end_date')){
			this.end_date = $.cookie('end_date');
		}
	},

	template: JST['index/listings_search'],

	className: 'listing-search-outside-wrapping-container',

	events: {
		"change form": "changeForm",
		"click button#search-submit": "newLocationSearch"
	},

	// upon any change to the search form (date or price), store new search params in the cookies, send updated search params to the map
	changeForm: function(event){
		event.preventDefault();
		var formValues = $('form').serializeJSON();
		var formPrice = formValues.price.split(',');
		var options = {
			start_date: formValues.date.start,
			end_date: formValues.date.end,
			min_price: parseInt(formPrice[0]),
			max_price: parseInt(formPrice[1])
		};
		$.cookie('start_date', formValues.date.start);
		$.cookie('end_date', formValues.date.end);
		this.collection.trigger("newParams", options);
	},

	// create calendars, set start dates and end dates so that start must come before end, and visa versa (no time travel allowed!)
	initDatePicker: function(){
		var that = this;
		setTimeout(function(){
			that.$startDate = $('#start').datepicker({
				startDate: new Date(),
				format: 'mm/dd/yyyy',
				autoclose: true
			});
			that.$endDate = $('#end').datepicker({
				startDate: new Date(),
				format: 'mm/dd/yyyy',
				autoclose: true
			});
			if(that.start_date){
				that.$startDate.datepicker('setDate', that.start_date);
				that.$endDate.datepicker('setStartDate', that.start_date);
			}
			if(that.end_date){
				that.$endDate.datepicker('setDate', that.end_date);
				that.$startDate.datepicker('setEndDate', that.end_date);
			}
			that.$startDate.on('changeDate', function(){
				that.$endDate.datepicker('setStartDate', that.$startDate.datepicker('getDate'))
			});
			that.$endDate.on('changeDate', function(){
				that.$startDate.datepicker('setEndDate', that.$endDate.datepicker('getDate'))
			});
		}, 0);
	},

	initPriceSlider: function(){
		var that = this;
		setTimeout(function(){
			$('#price-slider').slider({});
		}, 0);
	},

	// upon a new location being submitted to the search bar, begin the search process by storing the current params and sending the new location to the map
		event.preventDefault();
		var location = $('.listing-search-block').val();
		var formParam = $('form').serializeJSON();
		var dates = formParam.date;
		var prices = formParam.price.split(',');
		var params = {
			location: location, 
			start_date: dates.start, 
			end_date: dates.end, 
			min_price: prices[0], 
			max_price: prices[1]
		};
		$.cookie('location', params.location);
		$.cookie('start_date', params.start_date);
		$.cookie('end_date', params.end_date);
		this.collection.trigger('newLocation', params);
	},

	render: function(){
		var content = this.template({
			location: this.location
		});
		this.$el.html(content);
		this.initDatePicker();
		this.initPriceSlider();
		return this;
	}
})