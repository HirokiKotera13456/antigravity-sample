---
name: ui-component-generator
description: ブランドのガイドラインに沿った、洗練されたUIコンポーネントを自動生成します。
is_skill: true
---

# UIコンポーネント生成プロトコル

新しいUI要素（ボタン、入力フォーム、カードなど）が必要な場合、このスキルを起動して一貫性のあるコードを生成してください。

## 1. デザイン原則の継承
生成するすべてのコンポーネントは以下の変数を `src/index.css` から継承する必要があります：
- `bg-brand-bg` (#F8F7F2)
- `text-brand-text` (#1A1A1A)
- `accent` (#800020)
- `mustard` (#FFDB58)

## 2. 実装要件
- **TypeScript:** 必ず `.tsx` で作成し、Propsの型定義を行う。
- **Framer Motion:** インタラクティブな要素（Hover, Click）には必ず微細なアニメーションを追加する。
- **Tailwind v4:** モダンなクラス定義を使用する。

## 3. 生成ワークフロー
1. ユーザーからコンポーネント名と要件を受け取る。
2. `src/components/ui/` ディレクトリが存在しない場合は作成する。
3. `src/components/ui/[ComponentName].tsx` を作成する。
4. インポート手順や使用例をユーザーに提示する。
