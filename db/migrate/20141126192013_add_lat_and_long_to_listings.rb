class AddLatAndLongToListings < ActiveRecord::Migration
  def change
  	add_column :listings, :latitude, :float, null: false
  	add_column :listings, :longitude, :float, null: false
  	add_index :listings, [:latitude, :longitude]
  end
end
