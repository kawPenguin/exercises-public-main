import { TypedMap } from "./index.js";

describe('TypedMap', () => {
  describe('constructor', () => {
    test('正しい型のentriesで初期化できる', () => {
      const entries = [['key1', 'value1'], ['key2', 'value2']];
      const map = new TypedMap('string', 'string', entries);
      
      expect(map.keyType).toBe('string');
      expect(map.valueType).toBe('string');
    });
    
    test('型が違うentriesでTypeErrorをスローする', () => {
      const entries = [['key1', 'value1'], [123, 'value2']]; 
      
      expect(() => {
        new TypedMap('string', 'string', entries);
      }).toThrow(TypeError);
    });
  });
  
  describe('set()', () => {
    test('正しい型のkey-valueペアを設定できる', () => {
      const map = new TypedMap('string', 'number');
      const result = map.set('key1', 123);
      
      expect(result).toBe(map); 
    });
    
    test('型が違う場合にTypeErrorをスローする', () => {
      const map = new TypedMap('string', 'number');
      
      expect(() => {
        map.set(123, 456);
      }).toThrow(TypeError);
    });
  });
});