import { fetchSumOfFileSizes } from "./index.js";
import { readdir, stat } from "node:fs/promises";
import { describe, it, jest } from "@jest/globals";


// 'node:fs/promises' の readdir と stat をモック
jest.mock("node:fs/promises", () => ({
  readdir: jest.fn(),
  stat: jest.fn(),
}));

describe("fetchSumOfFileSizes", () => {
  it("ディレクトリに複数のファイルが存在する場合、合計ファイルサイズを返す", async () => {
    // readdir がファイルリストを返すように設定
    readdir.mockResolvedValue(["file1.txt", "file2.txt", "file3.txt"]);
    
    // stat が呼び出されるたびに異なるファイルサイズを返すように設定
    stat
      .mockResolvedValueOnce({ size: 100 }) // 1回目の呼び出し
      .mockResolvedValueOnce({ size: 200 }) // 2回目の呼び出し
      .mockResolvedValueOnce({ size: 300 }); // 3回目の呼び出し

    // 100 + 200 + 300 = 600
    await expect(fetchSumOfFileSizes("/fake/path")).resolves.toBe(600);
  });

  it("ディレクトリが空の場合、0 を返す", async () => {
    // readdir が空の配列を返すように設定
    readdir.mockResolvedValue([]);

    await expect(fetchSumOfFileSizes("/fake/empty")).resolves.toBe(0);
  });
});