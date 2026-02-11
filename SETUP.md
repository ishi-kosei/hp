# GitHubリポジトリ作成手順

## 前提条件

以下のツールをインストールする必要があります：

### 1. Gitのインストール

1. https://git-scm.com/download/win にアクセス
2. インストーラーをダウンロードして実行
3. インストール後、PowerShellを再起動

### 2. GitHub CLIのインストール（推奨）

1. https://cli.github.com/ にアクセス
2. Windows用インストーラーをダウンロードして実行
3. インストール後、PowerShellを再起動
4. 認証: `gh auth login`

## GitHubリポジトリの作成方法

### 方法1: GitHub CLIを使用（推奨）

```powershell
# リポジトリを初期化
git init

# ファイルを追加
git add .

# 初回コミット
git commit -m "Initial commit"

# GitHubリポジトリを作成してプッシュ
gh repo create hp --public --source=. --remote=origin --push
```

### 方法2: GitHub Webサイトを使用

1. https://github.com/new にアクセス
2. リポジトリ名を入力（例: `hp`）
3. PublicまたはPrivateを選択
4. 「Create repository」をクリック
5. 以下のコマンドを実行:

```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hp.git
git push -u origin main
```

（`YOUR_USERNAME`をあなたのGitHubユーザー名に置き換えてください）
