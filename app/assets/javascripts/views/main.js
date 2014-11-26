TVBnB.Views.Main = Backbone.CompositeView.extend({
	initialize: function(){
		this.addGoogle();
	},
	template: JST['index/main'],
	addGoogle: function(){
		var google = new TVBnB.Views.Google();
		this.addSubview(".google", google);
	},
	render: function() {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})