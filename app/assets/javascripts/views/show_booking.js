TVBnB.Views.ShowBooking = Backbone.View.extend({
	initialize: function(){
		if($.cookie('start_date')){
			this.start_date = $.cookie('start_date');
		}
		if($.cookie('end_date')){
			this.end_date = $.cookie('end_date');
		}
		this._reservations = this.model.reservations();
	},

	template: JST['show/booking'],

	className: 'booking-container',

	events: {
		"change form": "changeForm",
		"click button.request-to-book": "submitBookingRequest"
	},

	changeForm: function(event){
		event.preventDefault();
		var formValues = $(event.currentTarget).serializeJSON();
		var numDays;
		var disableButton;
		if(formValues.date.start != "" && formValues.date.end != ""){
			var numDays = (new Date(formValues.date.end) - new Date(formValues.date.start))/ (1000 * 60 * 60 * 24);
			disableButton = false;
		} else {
			var numDays = 0;
			disableButton = true;
		}
		var options = {start: formValues.date.start, end: formValues.date.end, numDays: numDays, price: this.model.get('price')};
		this.updateCalculator(options);
		button = this.$('button.request-to-book');
		if(disableButton){
			button.prop('disabled', true);
		} else {
			button.prop('disabled', false);
		}
	},

	submitBookingRequest: function(event){
		event.preventDefault();
		var formValues = this.$('form').serializeJSON().date;
		var params = {
			start_date: formValues.start,
			end_date: formValues.end, 
			listing_id: this.model.id
		};
		var newReservation = new TVBnB.Models.Reservation(params);
		var that = this;
		newReservation.save({}, {
			success: function(){
				that._reservations.add(newReservation);
				that.bookSuccess();
			},
			error: function(){
				that.bookFailure();
			}
		})
	},

	bookSuccess: function(){
		this.$('.booking-success').removeClass('booking-success-invisible');
	},

	bookFailure: function(){
		this.$('.booking-failure').removeClass('booking-failure-invisible');
	},

	initDatePicker: function(){
		var that = this;
		setTimeout(function(){
			that.$startDate = $('#start').datepicker({
				startDate: new Date(),
				autoclose: true,
				beforeShowDay: function(d){
					var validDay = true;
					var reservations = that.model.reservations().models;
					reservations.forEach(function(res){
						var start = new Date(res.get(0));
						var end = new Date(res.get(1));
						if(d >= start && d <= end){
							validDay = false;
						}
					});
					if(validDay){
						return [true, "", ""];
					} else {
						return [false, "", "Booked"];
					}
				}
			});
			that.$endDate = $('#end').datepicker({
				startDate: new Date(),
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

	updateCalculator: function(options) {
		var $calculator = this.$el.find('.price-calculator');
		var content = this.renderCalculator(options);
		$calculator.html(content);
	},

	renderCalculator: JST['show/calculator'],

	render: function(options){
		var content;
		if(options){
			var content = this.template({
				listing: this.model,
				options: options
			});
			this.$el.html(content);
			this.updateCalculator({numDays: options.numDays, price: this.model.get('price')});
		} else {
			var content = this.template({
				listing: this.model,
				options: {start: "", end: ""}
			});
			this.$el.html(content);
			this.updateCalculator({numDays: 0, price: this.model.get('price')});
		}
		this.initDatePicker();
		return this;
	}
})