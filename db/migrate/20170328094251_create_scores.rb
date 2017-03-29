class CreateScores < ActiveRecord::Migration[5.1]
  def change
    create_table :scores, comment: 'スコア' do |t|
      t.integer :throw01, null: true, comment: '第01投'
      t.integer :throw02, null: true, comment: '第02投'
      t.integer :throw03, null: true, comment: '第03投'
      t.integer :throw04, null: true, comment: '第04投'
      t.integer :throw05, null: true, comment: '第05投'
      t.integer :throw06, null: true, comment: '第06投'
      t.integer :throw07, null: true, comment: '第07投'
      t.integer :throw08, null: true, comment: '第08投'
      t.integer :throw09, null: true, comment: '第09投'
      t.integer :throw10, null: true, comment: '第10投'
      t.integer :throw11, null: true, comment: '第11投'
      t.integer :throw12, null: true, comment: '第12投'
      t.integer :throw13, null: true, comment: '第13投'
      t.integer :throw14, null: true, comment: '第14投'
      t.integer :throw15, null: true, comment: '第15投'
      t.integer :throw16, null: true, comment: '第16投'
      t.integer :throw17, null: true, comment: '第17投'
      t.integer :throw18, null: true, comment: '第18投'
      t.integer :throw19, null: true, comment: '第19投'
      t.integer :throw20, null: true, comment: '第20投'
      t.integer :throw21, null: true, comment: '第21投'
      t.integer :fs01, null: true, comment: 'フレームスコア01'
      t.integer :fs02, null: true, comment: 'フレームスコア02'
      t.integer :fs03, null: true, comment: 'フレームスコア03'
      t.integer :fs04, null: true, comment: 'フレームスコア04'
      t.integer :fs05, null: true, comment: 'フレームスコア05'
      t.integer :fs06, null: true, comment: 'フレームスコア06'
      t.integer :fs07, null: true, comment: 'フレームスコア07'
      t.integer :fs08, null: true, comment: 'フレームスコア08'
      t.integer :fs09, null: true, comment: 'フレームスコア09'
      t.integer :fs10, null: true, comment: 'フレームスコア10'
      t.integer :score, null: true, comment: 'スコア'

      t.timestamps
    end
  end
end
