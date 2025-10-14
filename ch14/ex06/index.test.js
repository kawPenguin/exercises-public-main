import { makeProxyAndLogs } from "./index.js";

describe("makeProxyAndLogs", () => {
  it("初期状態でlogsが空配列", () => {
    const obj = { f: () => {} };
    const [proxy, logs] = makeProxyAndLogs(obj);
    expect(logs).toEqual([]);
  });

  it("メソッド呼び出しを記録する", () => {
    const obj = { f: (x, y) => x + y };
    const [proxy, logs] = makeProxyAndLogs(obj);
    
    proxy.f(1, 2);
    
    expect(logs).toHaveLength(1);
    expect(logs[0].name).toBe("f");
    expect(logs[0].args).toEqual([1, 2]);
    expect(logs[0].timestamp).toBeInstanceOf(Date);
  });

  it("プロパティアクセスは記録しない", () => {
    const obj = { p: 1 };
    const [proxy, logs] = makeProxyAndLogs(obj);
    
    proxy.p;
    
    expect(logs).toEqual([]);
  });
});