TVBnB.Views.ListingsSearch = Backbone.View.extend({

	initialize: function(){
		this.location = '';
		this.start_date = '';
		this.end_date = '';
		if($.cookie('location')){
			this.location = $.cookie('location');
		}
		if($.cookie('start_date')){
			this.start_date = $.cookie('start_date');
		}
		if($.cookie('end_date')){
			this.end_date = $.cookie('end_date');
		}
		debugger;
	},

	template: JST['index/listings_search'],

	events: {
		"change form": "submitForm"
	},

	submitForm: function(event){
		event.preventDefault();
		var formValues = $(event.currentTarget).serializeJSON();
		var formPrice = formValues.price.split(',');
		var price = {
			min: parseInt(formPrice[0]),
			max: parseInt(formPrice[1])
		};
		var options = {
			date: formValues.date,
			price: price
		};
		this.collection.trigger("newSearch", options);
	},

	initDatePicker: function(){
		var that = this;
		setTimeout(function(){
			that.$startDate = $('#start').datepicker({
				startDate: new Date(),
				autoclose: true
			});
			that.$endDate = $('#end').datepicker({
				startDate: new Date(),
				autoclose: true
			});
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

	render: function(){
		var content = this.template();
		this.$el.html(content);
		this.initDatePicker();
		this.initPriceSlider();
		return this;
	}
})