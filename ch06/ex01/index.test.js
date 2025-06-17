import { newHashTable } from "./index.js";

describe('HashTable operations', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = newHashTable(10); 
  });

  it('値が保存できること', () => {
    hashTable.put("key1", "value1");
    hashTable.put("key2", { value: "value2" });

    expect(hashTable.size).toBe(2);
    expect(hashTable.get("key1")).toBe("value1");
    expect(hashTable.get("key2")).toEqual({ value: "value2" }); 
  });

  it('値が更新できていること', () => {
    hashTable.put("key2", { value: "value2" });
    hashTable.put("key2", "new value");

    expect(hashTable.get("key2")).toBe("new value");
    expect(hashTable.size).toBe(1); 
  });

  it('正しく削除できていること', () => {
    hashTable.put("key1", "value1");
    hashTable.put("key2", "value2");
    
    expect(hashTable.size).toBe(2);
    hashTable.remove("key2");

    expect(hashTable.get("key2")).toBeUndefined();
    expect(hashTable.size).toBe(1);
    expect(hashTable.get("key1")).toBe("value1"); 
  });

  it('存在しないキーで削除したとき', () => {
    hashTable.put("key1", "value1");
    
    expect(hashTable.size).toBe(1);
    hashTable.remove("nonExistentKey");

    expect(hashTable.size).toBe(1); 
    expect(hashTable.get("nonExistentKey")).toBeUndefined();
  });

  it('存在しないキーで取得したとき', () => {
    expect(hashTable.get("nonExistentKey")).toBeUndefined();
  });
});