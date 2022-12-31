# ziyuutyou-next
たくさんの自由帳 Next.js リメイク版

[![Netlify Status](https://api.netlify.com/api/v1/badges/cc14df48-3e5f-4582-a498-503503d319f3/deploy-status)](https://app.netlify.com/sites/takusan23-ziyuutyou/deploys)

![Imgur](https://imgur.com/6N5X7yQ.png)

`Next.js` / `MUI` / `unified` で出来ている。

## 開発環境構築

### 必要なもの

- Node.js
    - v14.16.0 以降？
    - 最新版を入れておけば良さそう
    - 本番環境へデプロイするならその環境のNode.jsのバージョンも確認してね

### 起動まで

- このリポジトリをクローンします
- クローンしたフォルダ内でターミナルを立ち上げます
- 以下を実行します
```
npm i
```
- 開発サーバーを立ち上げます
```
npm run dev
```
- (多分) `localhost:3000`をブラウザで開きます


### 本番環境のテスト
本番環境でビルドして開発サーバーを立ち上げます

```
npm run build
npm run start
```

### 静的HTML書き出し(意味深)
以下のコマンドを叩くと
- すべてのページのhtml書き出し
- サイトマップ作成
が行われます。

CPU使用率が書き出し中は100%で張り付くけどしゃあない。

```
npm run deploy
```

#### 静的書き出し先

`out`フォルダに成果物が入っています。  
このフォルダを公開すればいいと思います。

## ファイル構造

- content
    - 記事のMarkdown とか 書き出し時に呼び出すJSONとか
- components
    - MUIには無いUI部品
- pages
    - 画面遷移等のページ
    - AndroidのFragmentみたいな
- public
    - アイコン等のリソース
- src
    - components でも pages でもないTypeScriptファイルの置き場所
    - 記事読み込みクラスとか
- styles/css
    - ほとんどMUIがやってるけどちょっとだけcssを書いたので