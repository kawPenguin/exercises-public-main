document.getElementById("image").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const img = new Image();
  const reader = new FileReader();

  reader.addEventListener("load", (e) => {
    img.src = e.target.result;
  });

  img.addEventListener("load", () => {
    const originalCanvas = document.getElementById("original");
    const filteredCanvas = document.getElementById("filtered");
    const originalCtx = originalCanvas.getContext("2d");
    const filteredCtx = filteredCanvas.getContext("2d");

    originalCanvas.width = img.width;
    originalCanvas.height = img.height;
    filteredCanvas.width = img.width;
    filteredCanvas.height = img.height;

    originalCtx.drawImage(img, 0, 0);

    const imageData = originalCtx.getImageData(0, 0, img.width, img.height);
    const data = imageData.data;

    // グレースケールへの変換 (RGB を足して平均を取っている)
    //
    // ガウシアンフィルタを実装する場合はこの周辺のコードを変更しなさい
    // imageData の中身はそのままに別の配列に結果を格納するとよい
    // ```js
    // const outputData = new Uint8ClampedArray(imageData.data.length);
    //
    // // TODO: ここで imageData.data を参照して outputData に結果を格納
    //
    // const outputImageData = new ImageData(outputData, img.width, img.height);
    // filteredCtx.putImageData(outputImageData, 0, 0);
    // ```
    // for (let i = 0; i < data.length; i += 4) {
    //   const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    //   data[i] = avg;
    //   data[i + 1] = avg;
    //   data[i + 2] = avg;
    // }

    // 5x5ガウシアンフィルタ(0-255のuint8)
    const outputData = new Uint8ClampedArray(imageData.data.length);

    // 5x5の加重平均化フィルタ
    const kernel = [
      [1, 4, 6, 4, 1],
      [4, 16, 24, 16, 4],
      [6, 24, 36, 24, 6],
      [4, 16, 24, 16, 4],
      [1, 4, 6, 4, 1]
    ];
    const kernelSum = 256;

    const width = img.width;
    const height = img.height;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let r = 0, g = 0, b = 0;

        // 5x5の範囲でカーネルを適用
        for (let ky = -2; ky <= 2; ky++) {
          for (let kx = -2; kx <= 2; kx++) {
            const pixelY = y + ky;
            const pixelX = x + kx;

            // 画像外を見ないか確認
            if (pixelY >= 0 && pixelY < height && pixelX >= 0 && pixelX < width) {
              const index = (pixelY * width + pixelX) * 4;
              const weight = kernel[ky + 2][kx + 2];

              r += data[index] * weight;
              g += data[index + 1] * weight;
              b += data[index + 2] * weight;
            }
          }
        }

        const outputIndex = (y * width + x) * 4;
        outputData[outputIndex] = r / kernelSum;
        outputData[outputIndex + 1] = g / kernelSum;
        outputData[outputIndex + 2] = b / kernelSum;
        outputData[outputIndex + 3] = data[outputIndex + 3]; //A（透明度)
      }
    }

    const outputImageData = new ImageData(outputData, img.width, img.height);    
    filteredCtx.putImageData(outputImageData, 0, 0);
  });

  reader.readAsDataURL(file);
});
