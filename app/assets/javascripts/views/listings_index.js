TVBnB.Views.ListingsIndex = Backbone.CompositeView.extend({
	
	initialize: function(){
		this.listenTo(this.collection, 'newSearch', this.filterCollection);
		this.listenTo(this.collection, 'filter', this.renderListingsSource);
		this.listenTo(this.collection, 'newParams', this.filterCollection);
		this.children = [];
	},

	addListing: function(listing){
		var subview = new TVBnB.Views.ListingsItem({
			model: listing,
		});
		this.children.push(subview);
		this.addSubview('.listings-container', subview);
	},

	filterCollection: function(options){
		if(options.boundaries){
			this.boundaries = options.boundaries;
		}
		if(options.min_price || options.min_price === 0){
			this.min_price = options.min_price;
		}
		if(options.max_price || options.max_price === 0){
			this.max_price = options.max_price;
		}
		if(options.start_date){
			this.start_date = options.start_date;
		}
		if(options.end_date){
			this.end_date = options.end_date;
		}
		var that = this;
		this.children.forEach(function(listing){
			that.removeSubview('.listings-container', listing)
		});
		this._listingsSource = this.collection.search(
			this.boundaries, 
			this.min_price, 
			this.max_price, 
			this.start_date, 
			this.end_date
		);
		this.collection.trigger('filter', this._listingsSource);
	},

	renderListingsSource: function(){
		this._listingsSource.each(this.addListing.bind(this));
		this.render();
	},

	className: 'search-results panel-body',

	template: JST['index/listings_index'],

	render: function() {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		this.onRender();
		return this;
	}
})