class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
    	t.string :content, null: false
    	t.integer :user_id, null: false
    	t.integer :listing_id, null: false

      t.timestamps
    end
    add_index :reviews, :user_id
    add_index :reviews, :listing_id
  end
end
