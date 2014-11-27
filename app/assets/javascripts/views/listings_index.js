TVBnB.Views.ListingsIndex = Backbone.CompositeView.extend({
	
	initialize: function(){
		this.listenTo(this.collection, 'newSearch', this.filterCollection);
		this.listenTo(this.collection, 'filter', this.renderListingsSource);
		this.children = [];
	},

	addListing: function(listing){
		var subview = new TVBnB.Views.ListingsItem({
			model: listing 
		});
		this.children.push(subview);
		this.addSubview('.listings', subview);
	},

	filterCollection: function(options){
		var that = this;
		this.children.forEach(function(listing){
			that.removeSubview('.listings', listing)
		});
		this._listingsSource = this.collection.search(options);
		this.collection.trigger('filter');
	},

	renderListingsSource: function(){
		this._listingsSource.each(this.addListing.bind(this));
		this.render();
	},

	className: 'listings-index row',

	template: JST['index/listings_index'],

	render: function() {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		this.onRender();
		return this;
	}
})