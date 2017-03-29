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

ActiveRecord::Schema.define(version: 20170328094251) do

  create_table "scores", force: :cascade, comment: "スコア" do |t|
    t.integer "throw01", comment: "第01投"
    t.integer "throw02", comment: "第02投"
    t.integer "throw03", comment: "第03投"
    t.integer "throw04", comment: "第04投"
    t.integer "throw05", comment: "第05投"
    t.integer "throw06", comment: "第06投"
    t.integer "throw07", comment: "第07投"
    t.integer "throw08", comment: "第08投"
    t.integer "throw09", comment: "第09投"
    t.integer "throw10", comment: "第10投"
    t.integer "throw11", comment: "第11投"
    t.integer "throw12", comment: "第12投"
    t.integer "throw13", comment: "第13投"
    t.integer "throw14", comment: "第14投"
    t.integer "throw15", comment: "第15投"
    t.integer "throw16", comment: "第16投"
    t.integer "throw17", comment: "第17投"
    t.integer "throw18", comment: "第18投"
    t.integer "throw19", comment: "第19投"
    t.integer "throw20", comment: "第20投"
    t.integer "throw21", comment: "第21投"
    t.integer "fs01", comment: "フレームスコア01"
    t.integer "fs02", comment: "フレームスコア02"
    t.integer "fs03", comment: "フレームスコア03"
    t.integer "fs04", comment: "フレームスコア04"
    t.integer "fs05", comment: "フレームスコア05"
    t.integer "fs06", comment: "フレームスコア06"
    t.integer "fs07", comment: "フレームスコア07"
    t.integer "fs08", comment: "フレームスコア08"
    t.integer "fs09", comment: "フレームスコア09"
    t.integer "fs10", comment: "フレームスコア10"
    t.integer "score", comment: "スコア"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
