# Roblox OAuth 2.0 Next.JS の例

Roblox OAuth 2.0 API のシンプルな実用的な実装。

## 機能

- [Lucia](https://lucia-auth.com/)による認証
- ダークテーマとライトテーマ
- シンプルなホームページ
- 事前設定されたデータベース
- 基本的なアニメーション
## プレビュー

### ダークモード
![](https://i.imgur.com/BeZp8tj.png)

### ライトモード
![](https://i.imgur.com/zwX4qTj.png)

## はじめる

サーバーを実行する前に、[OAuth 2.0 アプリケーションを登録](https://create.roblox.com/docs/cloud/open-cloud/oauth2-registration)し、許可されたリダイレクトのリストに``http://localhost:3000/login/roblox/callback`` を追加する必要があります。別のポートまたはドメインで実行している場合は、これを変更する必要があります。

OAuth 2.0 アプリケーションを作成したら、アプリケーションの依存関係をインストールする必要があります：

```bash
npm i

# または

yarn install

# または

pnpm i

# または

bun install
```


次に、サーバーを実行します：
```bash
npm run dev

# または

yarn dev

# または

pnpm dev

# または

bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスすると、サイトが実行中であることがわかります。

### 便利なリンク

- [Shadcn UI](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Next Themes](https://github.com/pacocoursey/next-themes)
- [Oslo](https://oslo.js.org/)
- [Lucia Auth](https://lucia-auth.com/)
- [Prisma](https://www.prisma.io/)
- [Shiki (Syntax Highlighter)](https://shiki.matsu.io/)
- [Next.js Documentation](https://nextjs.org/docs)
