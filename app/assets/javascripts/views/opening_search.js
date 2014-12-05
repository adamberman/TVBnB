TVBnB.Views.OpeningSearch = Backbone.View.extend({

	className: 'opening-search',

	template: JST['opening/search'],

	events: {
		'change form.opening-search-form': 'checkIfComplete',
		'click button': 'submit'
	},

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
			that.$startDate.on('changeDate', function(){
				that.$endDate.datepicker('setStartDate', that.$startDate.datepicker('getDate'))
			});
			that.$endDate.on('changeDate', function(){
				that.$startDate.datepicker('setEndDate', that.$endDate.datepicker('getDate'))
			});
		}, 0);
	},

	// initGeocomplete: function(){
	// 	debugger;
	// 	this.$('.opening-search-block').geocomplete();
	// },

	checkIfComplete: function(){
		var params = this.$el.find('form').serializeJSON().search;
		if (params.location != "" && params.start_date != "" && params.end_date != "") {
			this.$el.find('button').prop('disabled', false);
		} else {
			this.$el.find('button').prop('disabled', true);
		}
	},

	submit: function(event){
		event.preventDefault();
		var params = this.$el.find('form').serializeJSON().search;
		$.cookie('location', params.location, { path: '/' });
		$.cookie('start_date', params.start_date, { path: '/' });
		$.cookie('end_date', params.end_date, { path: '/' });
		Backbone.history.navigate('#/search', { trigger: true });
	},

	render: function(){
		var content = this.template();
		this.$el.html(content);
		this.initDatePicker();
		this.checkIfComplete();
		return this;
	}
})