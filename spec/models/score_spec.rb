# == Schema Information
#
# Table name: scores # スコア
#
#  id         :integer          not null, primary key
#  throw01    :integer                                # 第01投
#  throw02    :integer                                # 第02投
#  throw03    :integer                                # 第03投
#  throw04    :integer                                # 第04投
#  throw05    :integer                                # 第05投
#  throw06    :integer                                # 第06投
#  throw07    :integer                                # 第07投
#  throw08    :integer                                # 第08投
#  throw09    :integer                                # 第09投
#  throw10    :integer                                # 第10投
#  throw11    :integer                                # 第11投
#  throw12    :integer                                # 第12投
#  throw13    :integer                                # 第13投
#  throw14    :integer                                # 第14投
#  throw15    :integer                                # 第15投
#  throw16    :integer                                # 第16投
#  throw17    :integer                                # 第17投
#  throw18    :integer                                # 第18投
#  throw19    :integer                                # 第19投
#  throw20    :integer                                # 第20投
#  throw21    :integer                                # 第21投
#  fs01       :integer                                # フレームスコア01
#  fs02       :integer                                # フレームスコア02
#  fs03       :integer                                # フレームスコア03
#  fs04       :integer                                # フレームスコア04
#  fs05       :integer                                # フレームスコア05
#  fs06       :integer                                # フレームスコア06
#  fs07       :integer                                # フレームスコア07
#  fs08       :integer                                # フレームスコア08
#  fs09       :integer                                # フレームスコア09
#  fs10       :integer                                # フレームスコア10
#  score      :integer                                # スコア
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Score, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
