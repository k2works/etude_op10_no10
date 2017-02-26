Étude Op. 10, No. 10
===================

# 目的 #
Railsアプリケーションの構築・配置

# 前提 #
| ソフトウェア   | バージョン   | 備考        |
|:---------------|:-------------|:------------|
| ruby           |2.4.0    |             |
| rails          |5.1.0    |             |
| vagrant        |1.8.7    |             |
| docker         |1.12.5   |             |
| docker-compose |1.8.0    |             |

# 構成 #
1. [構築](#構築)
1. [配置](#配置)
1. [開発](#開発)

## 構築
### Railsのインストール
```bash
vagrant up
vagrant ssh
cd /vagrant
gem install rails -v 5.1.0.beta1
```

### Railsアプリケーションのセットアップ
```bash
rails new .
```

```bash
rails s -b 0.0.0.0
```
`http://192.168.30.1:3000`に接続して動作を確認する
**[⬆ back to top](#構成)**

## 配置
**[⬆ back to top](#構成)**

## 開発
**[⬆ back to top](#構成)**

# 参照 #