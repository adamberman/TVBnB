# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141130235434) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "images", force: true do |t|
    t.string   "url",        null: false
    t.integer  "listing_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "images", ["listing_id"], name: "index_images_on_listing_id", using: :btree

  create_table "listings", force: true do |t|
    t.integer  "price",       null: false
    t.string   "address",     null: false
    t.string   "name",        null: false
    t.text     "description", null: false
    t.integer  "user_id",     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "latitude",    null: false
    t.float    "longitude",   null: false
  end

  add_index "listings", ["address"], name: "index_listings_on_address", using: :btree
  add_index "listings", ["latitude", "longitude"], name: "index_listings_on_latitude_and_longitude", using: :btree
  add_index "listings", ["price"], name: "index_listings_on_price", using: :btree
  add_index "listings", ["user_id"], name: "index_listings_on_user_id", using: :btree

  create_table "reservations", force: true do |t|
    t.integer  "user_id",    null: false
    t.integer  "listing_id", null: false
    t.date     "start_date", null: false
    t.date     "end_date",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "reservations", ["listing_id"], name: "index_reservations_on_listing_id", using: :btree
  add_index "reservations", ["user_id"], name: "index_reservations_on_user_id", using: :btree

  create_table "reviews", force: true do |t|
    t.string   "content",    null: false
    t.integer  "user_id",    null: false
    t.integer  "listing_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "reviews", ["listing_id"], name: "index_reviews_on_listing_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "gravatar_url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
