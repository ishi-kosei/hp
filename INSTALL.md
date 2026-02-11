# インストール手順

## 現在の状況

✅ **GitHub CLI**: インストール済み（バージョン 2.86.0）
❌ **Git**: 未インストール（管理者権限が必要）

## Gitのインストール方法

### 方法1: 管理者権限でPowerShellを開いてインストール（推奨）

1. Windowsキーを押して「PowerShell」と検索
2. 「Windows PowerShell」を右クリック → 「管理者として実行」
3. 以下のコマンドを実行:

```powershell
winget install --id Git.Git -e --source winget
```

4. インストールが完了したら、PowerShellを再起動

### 方法2: 手動でダウンロードしてインストール

1. https://git-scm.com/download/win にアクセス
2. インストーラーをダウンロード
3. ダウンロードしたファイルを実行してインストール
4. インストール中はデフォルト設定のままで問題ありません
5. インストール完了後、PowerShellを再起動

## インストール確認

PowerShellを再起動後、以下のコマンドで確認してください:

```powershell
git --version
gh --version
```

両方のコマンドがバージョン情報を表示すれば、インストール成功です。

## 次のステップ

インストールが完了したら、以下のコマンドでGitHubリポジトリを作成できます:

```powershell
cd c:\Users\perfo\OneDrive\Desktop\test\hp
git init
git add .
git commit -m "Initial commit"
gh auth login
gh repo create hp --public --source=. --remote=origin --push
```
