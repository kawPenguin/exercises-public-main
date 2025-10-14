import { test, expect } from "@playwright/test";

test("カテゴリ選択で商品リストが正しくフィルタリングされること", async ({
  page,
}) => {
  // index.html にアクセス
  await page.goto("/ch15.01-03/ex14/index.html");

  // 初期状態ではすべての商品が表示されていることを確認
  await expect(page.getByTestId("food1")).toBeVisible();
  await expect(page.getByTestId("stationery1")).toBeVisible();
  await expect(page.getByTestId("stationery2")).toBeVisible();

  // カテゴリ「文房具」を選択
  await page.getByTestId("select").selectOption("stationery");

  // 「文房具」カテゴリの商品が表示され、「食品」カテゴリの商品が非表示になることを確認
  await expect(page.getByTestId("food1")).toBeHidden();
  await expect(page.getByTestId("stationery1")).toBeVisible();
  await expect(page.getByTestId("stationery2")).toBeVisible();

  // カテゴリ「食品」を選択
  await page.getByTestId("select").selectOption("food");

  // 「食品」カテゴリの商品が表示され、「文房具」カテゴリの商品が非表示になることを確認
  await expect(page.getByTestId("food1")).toBeVisible();
  await expect(page.getByTestId("stationery1")).toBeHidden();
  await expect(page.getByTestId("stationery2")).toBeHidden();

  // カテゴリ「すべて」を選択
  await page.getByTestId("select").selectOption("all");

  // 再びすべての商品が表示されていることを確認
  await expect(page.getByTestId("food1")).toBeVisible();
  await expect(page.getByTestId("stationery1")).toBeVisible();
  await expect(page.getByTestId("stationery2")).toBeVisible();
});