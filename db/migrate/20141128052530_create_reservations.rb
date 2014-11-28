class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
    	t.integer :user_id, null: false
    	t.integer :listing_id, null: false
    	t.date :start_date, null: false
    	t.date :end_date, null: false

      t.timestamps
    end
    add_index :reservations, :user_id
    add_index :reservations, :listing_id
  end
end
