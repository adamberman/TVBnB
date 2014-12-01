TVBnB.Views.ShowBooking = Backbone.View.extend({
	initialize: function(){
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
		var options = {start: formValues.date.start, end: formValues.date.end, numDays: numDays};
		// this.render(options);
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
			}
		})
	},

	bookSuccess: function(){
		this.$('.booking-success').removeClass('booking-success-invisible');
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
		}, 0);
	},

	renderCalc: function() {

	},

	render: function(options){
		var content;
		if(options){
			var content = this.template({
				listing: this.model,
				options: options
			});
		} else {
			var content = this.template({
				listing: this.model,
				options: {start: "", end: "", numDays: 0}
			});
		}
		this.$el.html(content);
		this.renderCalc({start: "", end: "", numDays: 0})
		this.initDatePicker();
		return this;
	}
})