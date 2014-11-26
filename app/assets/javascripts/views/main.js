TVBnB.Views.Main = Backbone.CompositeView.extend({
	initialize: function(){
		this.addGoogle();
		this.addListIndex();
	},
	className: "main",
	template: JST['index/main'],
	addGoogle: function(){
		var google = new TVBnB.Views.Google();
		this.addSubview(".google", google);
	},
	addListIndex: function(){
		var index = new TVBnB.Views.ListingsIndex({
			collection: this.collection
		});
		this.addSubview(".other", index);
	},
	render: function() {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})