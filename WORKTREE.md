# Git Worktree 使い方ガイド

Git Worktreeを使用すると、同じリポジトリに対して複数の作業ディレクトリを持つことができます。異なるブランチを同時に作業する際に便利です。

## 基本的な使い方

### 新しいWorktreeを作成

```powershell
# 新しいブランチ用のWorktreeを作成
git worktree add ../hp-feature feature-branch

# 既存のブランチ用のWorktreeを作成
git worktree add ../hp-dev dev

# リモートブランチから新しいWorktreeを作成
git worktree add ../hp-hotfix -b hotfix-branch origin/master
```

### Worktreeの一覧を表示

```powershell
git worktree list
```

### Worktreeを削除

```powershell
# Worktreeディレクトリを削除してから、Gitから登録を削除
git worktree remove ../hp-feature

# または、ディレクトリを削除した後
git worktree prune
```

### Worktree間での作業

各Worktreeは独立した作業ディレクトリなので、それぞれで異なるブランチをチェックアウトして作業できます。

## 使用例

### 例1: 機能開発用のWorktreeを作成

```powershell
# 機能開発用のブランチとWorktreeを作成
git worktree add ../hp-feature -b feature/new-feature

# 新しいディレクトリに移動して作業
cd ../hp-feature

# 作業後、コミット・プッシュ
git add .
git commit -m "Add new feature"
git push -u origin feature/new-feature
```

### 例2: バグ修正用のWorktreeを作成

```powershell
# バグ修正用のブランチとWorktreeを作成
git worktree add ../hp-bugfix -b bugfix/fix-issue

# バグ修正作業
cd ../hp-bugfix
# ... 修正作業 ...

# コミット・プッシュ
git add .
git commit -m "Fix bug"
git push -u origin bugfix/fix-issue
```

### 例3: リリース準備用のWorktree

```powershell
# リリースブランチ用のWorktreeを作成
git worktree add ../hp-release release/v1.0.0

cd ../hp-release
# リリース作業...
```

## 注意事項

1. **同じブランチを複数のWorktreeでチェックアウトすることはできません**
2. Worktreeを削除する際は、まず作業ディレクトリを削除してから `git worktree remove` を実行します
3. Worktreeディレクトリは通常、メインリポジトリの親ディレクトリに配置することを推奨します

## 現在のWorktree一覧

```powershell
git worktree list
```

現在のWorktree:
- `C:/Users/perfo/OneDrive/Desktop/test/hp` (master)
