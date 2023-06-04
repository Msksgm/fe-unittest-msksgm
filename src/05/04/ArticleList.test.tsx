import { render, screen, within } from "@testing-library/react";
import { ArticleList } from "./ArticleLIst";
import { items } from "./fixture";

test("タイトルの表示", () => {
  render(<ArticleList items={items} />);
  expect(screen.getByRole("heading", { name: "記事一覧" })).toBeInTheDocument();
});

test("items の数だけ一覧表示される", () => {
  render(<ArticleList items={items} />);
  expect(screen.getAllByRole("listitem")).toHaveLength(3);
});

test("items の数だけ一覧表示される", () => {
  render(<ArticleList items={items} />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
  expect(within(list).getAllByRole("listitem")).toHaveLength(3);
});

test("一覧アイテムがからのとき「投稿記事がありません」が表示される", () => {
  // 空配列を与えて、一覧表示がない状態を再現する
  render(<ArticleList items={[]} />);
  // 存在しないと予想される要素の改善を試みる
  const list = screen.queryByRole("list");
  // list は存在しない
  expect(list).not.toBeInTheDocument();
  // list は null である
  expect(list).toBeNull();
  // 「投稿記事がありません」が表示されていることを確認
  expect(screen.getByText("投稿記事がありません")).toBeInTheDocument();
});
