export const detectFileType = (buffer) => {
  const bytes = new Uint8Array(buffer);

  // データが短すぎて判定できない場合は UNKNOWN を返す
  if (bytes.length < 4) {
    return "UNKNOWN";
  }

  // PNG: 89 50 4e 47 0d 0a 1a 0a
  if (
    bytes.length >= 8 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47 &&
    bytes[4] === 0x0d &&
    bytes[5] === 0x0a &&
    bytes[6] === 0x1a &&
    bytes[7] === 0x0a
  ) {
    return "PNG";
  }

  // PDF: %PDF- (25 50 44 46 2d)
  if (
    bytes.length >= 5 &&
    bytes[0] === 0x25 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x44 &&
    bytes[3] === 0x46 &&
    bytes[4] === 0x2d
  ) {
    return "PDF";
  }

  // GIF: GIF87a (47 49 46 38 37 61) または GIF89a (47 49 46 38 39 61)
  if (
    bytes.length >= 6 &&
    bytes[0] === 0x47 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x38 &&
    (bytes[4] === 0x37 || bytes[4] === 0x39) &&
    bytes[5] === 0x61
  ) {
    return "GIF";
  }

  // ZIP: PK (50 4b) の後に 03 04, 05 06, 07 08 のいずれかが続く
  if (
    bytes[0] === 0x50 &&
    bytes[1] === 0x4b &&
    (
      (bytes[2] === 0x03 && bytes[3] === 0x04) ||
      (bytes[2] === 0x05 && bytes[3] === 0x06) ||
      (bytes[2] === 0x07 && bytes[3] === 0x08)
    )
  ) {
    return "ZIP";
  }

  // 上記のいずれにも一致しない場合
  return "UNKNOWN";
};