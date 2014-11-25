class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
    	t.integer :price, null: false
    	t.string :address, null: false
    	t.string :name, null: false
    	t.text :description, null: false
    	t.integer :user_id, null: false

      t.timestamps
    end
    add_index :listings, :price
    add_index :listings, :address
    add_index :listings, :user_id
  end
end
