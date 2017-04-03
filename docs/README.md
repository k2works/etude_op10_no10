Étude Op. 10, No. 10
===================

# 目的 #
Railsアプリケーションの構築・配置

# 前提 #
| ソフトウェア   | バージョン   | 備考        |
|:---------------|:-------------|:------------|
| ruby           |2.4.0     |             |
| node           |7.4.0     |             |
| rails          |5.1.0.rc1 |             |
| vagrant        |1.8.7     |             |
| docker         |17.03.1   |             |
| docker-compose |1.11.2    |             |

# 構成 #
1. [構築](#構築)
1. [配置](#配置)
1. [開発](#開発)

## 構築
### 仮想マシンを使った開発
```bash
vagrant up
vagrant ssh
cd /vagrant
```

### Dockerコンテナを使った開発
```bash
docker build . -t app:base
docker run --name app --rm -p 5000:5000 -p 8080:8080 -v $(PWD):/container -i -t app:base /bin/bash
cd /container
```

上記の作業ディレクトリで以下の作業を実施する

### Railsのインストール
```bash
vagrant up
vagrant ssh
cd /vagrant
gem install rails -v 5.1.0.rc1
```

### Railsアプリケーションのセットアップ
```bash
rails new .
rails s -b 0.0.0.0 -p 3000
```
`http://0.0.0.0:3000`に接続して動作を確認する

### アプリケーションコンポーネントのセットアップ
LiveReloadセットアップ
```bash
bundle exec guard init
```

#### テスト環境セットアップ
```bash
bundle install
rails generate rspec:install
bundle binstubs rspec-core
./bin/rspec
```

#### ドキュメント環境セットアップ
```bash
bundle exec rails g annotate:install
bundle exec yard
bundle exec yard server
```

`http://0.0.0.0:8808`に接続して動作を確認する

#### JavaScript環境セットアップ
Webpackerのセットアップ

```bash
bin/rails webpacker:install
```

Reactのセットアップ

```bash
bin/rails webpacker:install:react
```

webpack-dev-serverを有効にする
```bash
bundle install
bin/webpack
bundle exec foreman start -f Procfile.dev
```
または
```bash
./bin/server
```

**[⬆ back to top](#構成)**

## 配置
**[⬆ back to top](#構成)**

## 開発
**[⬆ back to top](#構成)**

# 参照 #