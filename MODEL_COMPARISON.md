# モデル比較検討ガイド

複数のモデルを同時に比較検討するためのWorktree構成です。

## Worktree構成

以下のWorktreeが作成されています：

| Worktree | ブランチ | ディレクトリパス | 用途 |
|----------|----------|------------------|------|
| master | master | `hp/` | メインリポジトリ |
| Model A | model/a | `hp-model-a/` | Model Aの実験 |
| Model B | model/b | `hp-model-b/` | Model Bの実験 |
| Model C | model/c | `hp-model-c/` | Model Cの実験 |

## 使い方

### 1. 各モデルで作業する

```powershell
# Model Aで作業
cd ../hp-model-a
# Model Aのコードを編集・実行

# Model Bで作業
cd ../hp-model-b
# Model Bのコードを編集・実行

# Model Cで作業
cd ../hp-model-c
# Model Cのコードを編集・実行
```

### 2. 各モデルの結果を記録

各Worktreeディレクトリの `MODEL_INFO.md` に以下を記録：
- モデルの設定
- 実験結果
- パフォーマンス指標
- 備考

### 3. 変更をコミット

```powershell
# Model Aの変更をコミット
cd ../hp-model-a
git add .
git commit -m "Model A: 実験結果を追加"
git push -u origin model/a

# Model Bの変更をコミット
cd ../hp-model-b
git add .
git commit -m "Model B: 実験結果を追加"
git push -u origin model/b

# Model Cの変更をコミット
cd ../hp-model-c
git add .
git commit -m "Model C: 実験結果を追加"
git push -u origin model/c
```

### 4. 比較結果をまとめる

メインリポジトリ（`hp/`）で比較結果をまとめたドキュメントを作成：

```powershell
cd c:\Users\perfo\OneDrive\Desktop\test\hp
# 比較結果をまとめたファイルを作成
git add .
git commit -m "モデル比較結果を追加"
git push
```

## モデル比較テンプレート

以下のような比較表を作成して、各モデルの結果を比較できます：

| 指標 | Model A | Model B | Model C |
|------|---------|---------|---------|
| Accuracy | | | |
| Precision | | | |
| Recall | | | |
| F1-Score | | | |
| 実行時間 | | | |
| メモリ使用量 | | | |

## Worktreeの管理

### Worktree一覧を確認

```powershell
git worktree list
```

### 新しいモデル用Worktreeを追加

```powershell
git worktree add ../hp-model-d -b model/d
```

### Worktreeを削除

```powershell
# 作業ディレクトリに移動して作業を完了
cd ../hp-model-a
# 作業完了後、Worktreeを削除
cd ../hp
git worktree remove ../hp-model-a
```

## 注意事項

1. **同じブランチを複数のWorktreeでチェックアウトすることはできません**
2. 各Worktreeは独立しているため、異なるモデルのコードを同時に編集・実行できます
3. 共通のコードやデータは、メインリポジトリ（master）で管理することを推奨します
4. 各モデルの実験結果は、それぞれのブランチにコミットして管理します
