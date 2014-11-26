class AddLatAndLongToListings < ActiveRecord::Migration
  def change
  	add_column :listings, :latitude, :string, null: false
  	add_column :listings, :longitude, :string, null: false
  	add_index :listings, [:latitude, :longitude]
  end
end
