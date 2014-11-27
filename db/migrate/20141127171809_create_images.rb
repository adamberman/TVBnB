class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
    	t.string :url, null: false
    	t.integer :listing_id, null: false

      t.timestamps
    end
    add_index :images, :listing_id
  end
end
