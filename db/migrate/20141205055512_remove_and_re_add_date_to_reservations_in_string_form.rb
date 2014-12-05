class RemoveAndReAddDateToReservationsInStringForm < ActiveRecord::Migration
  def change
  	remove_column :reservations, :start_date
  	remove_column :reservations, :end_date
  	add_column :reservations, :start_date, :string, null: false
  	add_column :reservations, :end_date, :string, null: false
  end
end
