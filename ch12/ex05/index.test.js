import fs from 'fs';
import { readLines } from './index.js';
import { describe, it, jest } from "@jest/globals";

// fsモジュールをモックする
jest.mock('fs');

describe('readLines', () => {
  it('改行文字で分割できること', () => {
    const mockFilePath = 'test.txt';
    const mockFileContent = 'line 1\nline 2\nline 3';
    const mockFileBuffer = Buffer.from(mockFileContent, 'utf8');

    // fsモックのセット
    fs.openSync.mockReturnValue(1);
    fs.closeSync.mockClear();

    fs.readSync
      .mockImplementationOnce((fd, buffer) => mockFileBuffer.copy(buffer))
      .mockReturnValueOnce(0);
    
    const lines = [...readLines(mockFilePath)];

    // 正しく行が分割されているか
    expect(lines).toEqual(['line 1', 'line 2', 'line 3']);
  });
});