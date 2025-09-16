import { afterEach, beforeEach, describe, it} from "@jest/globals";
import assert from "node:assert/strict";
import * as fs from "node:fs/promises";

// テスト対象の関数をインポート
import {
  readdirWithPromise,
  readdirWithPromisify,
  statWithPromise,
  statWithPromisify,
} from "./index.js";

// テスト用ファイルを置くディレクトリ・ファイル名
const TEST_DIR = "test";
const TEST_FILE = `${TEST_DIR}/file.txt`;

beforeEach(async () => {
  // テスト用のファイル・ディレクトリを作成
  await fs.mkdir(TEST_DIR, { recursive: true });
  await fs.writeFile(TEST_FILE, "hello world");
});

afterEach(async () => {
  // テスト用に作成したファイル・ディレクトリの削除
  await fs.rm(TEST_DIR, { recursive: true, force: true });
});



describe("readdirWithPromise", () => {
  it("存在するディレクトリを読み込める", async () => {
    const files = await readdirWithPromise(TEST_DIR);
    assert.deepStrictEqual(files, ["file.txt"]);
  });

  it("存在しないディレクトリでエラーになる", async () => {
    await assert.rejects(
      async () => await readdirWithPromise("non-existent-dir"),
      { code: "ENOENT" } //Error NO ENTry
    );
  });
});

describe("readdirWithPromisify", () => {
  it("存在するディレクトリを読み込める", async () => {
    const files = await readdirWithPromisify(TEST_DIR);
    assert.deepStrictEqual(files, ["file.txt"]);
  });

  it("存在しないディレクトリでエラーになる", async () => {
    await assert.rejects(
      async () => await readdirWithPromisify("non-existent-dir"),
      { code: "ENOENT" }
    );
  });
});

describe("statWithPromise", () => {
  it("存在するファイルの情報を取得できる", async () => {
    const stats = await statWithPromise(TEST_FILE);
    assert.strictEqual(stats.isFile(), true);
    assert.strictEqual(stats.isDirectory(), false);
  });

  it("存在しないファイルでエラーになる", async () => {
    await assert.rejects(
      async () => await statWithPromise("non-existent-file.txt"),
      { code: "ENOENT" }
    );
  });
});

describe("statWithPromisify", () => {
  it("存在するファイルの情報を取得できる", async () => {
    const stats = await statWithPromisify(TEST_FILE);
    assert.strictEqual(stats.isFile(), true);
    assert.strictEqual(stats.isDirectory(), false);
  });

  it("存在しないファイルでエラーになる", async () => {
    await assert.rejects(
      async () => await statWithPromisify("non-existent-file.txt"),
      { code: "ENOENT" }
    );
  });
});