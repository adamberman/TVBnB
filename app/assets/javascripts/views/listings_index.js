TVBnB.Views.ListingsIndex = Backbone.CompositeView.extend({
	initialize: function(){
		this.listenTo(this.collection, 'newSearch', this.filterCollection);
		this.listenTo(this.collection, 'filter', this.renderListingsSource);
	},
	addListing: function(listing){
		var listing = new TVBnB.Views.ListingsItem({
			model: listing 
		});
		this.addSubview('.listings', listing);
	},
	filterCollection: function(options){
		this._listingsSource = this.collection.search(options);
		this.collection.trigger('filter');
	},
	renderListingsSource: function(){
		this._listingsSource.each(this.addListing.bind(this));
		this.render();
	},
	removeListing: function(list){
		var listing = _.find(this.subviews('.listings'), function(subview){
			return subview.model === list;
		});
		this.removeSubview('.listings', listing);
	},
	className: 'listings-index',
	template: JST['index/listings_index'],
	render: function() {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		this.onRender();
		return this;
	}
})