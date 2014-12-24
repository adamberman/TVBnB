TVBnB.Views.Main = Backbone.CompositeView.extend({
	
	initialize: function(){
		this.addGoogle();
		this.addSearch();
		this.addListIndex();
	},

	className: "main",

	template: JST['index/main'],

	// map subview
	addGoogle: function(){
		var google = new TVBnB.Views.Google({
			collection: this.collection
		});
		this.addSubview(".google", google);
	},

	// search subview (price, date, location search bar)
	addSearch: function(){
		var search = new TVBnB.Views.ListingsSearch({
			collection: this.collection
		});
		this.addSubview('.other', search);
	},

	// index page for all listings
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