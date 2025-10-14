import { defineConfig } from "@playwright/test";

export default defineConfig({
  webServer: {
    command: "npx http-server -p 3000",
    port: 3000,
    timeout: 120 * 1000, // サーバー起動のタイムアウトを120秒に延長
    reuseExistingServer: !process.env.CI, // CI環境でなければ既存サーバーを再利用
  },
  use: {
    headless: true,
    // 会社 PC は拡張機能オフで起動できない
    launchOptions: { ignoreDefaultArgs: ["--disable-extensions"] },
  },
  testDir: ".",
  testMatch: /(.+\.)?spec\.[jt]s/,
  workers: 1,
  maxFailures: 1,
});
