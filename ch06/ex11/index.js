
export const polarCartesianObject = {
  // 極座標のプロパティ
  r: 0,
  theta: 0,

  get x() {
    return this.r * Math.cos(this.theta);
  },

  set x(value) {
    if (isNaN(value)) {
      throw new Error('x cannot be NaN');
    }
    const currentY = this.y;
    
    // 新しい r と theta を計算
    this.r = Math.sqrt(value * value + currentY * currentY);
    this.theta = Math.atan2(currentY, value);
  },

  get y() {
    return this.r * Math.sin(this.theta);
  },

  set y(value) {
    if (isNaN(value)) {
      throw new Error('y cannot be NaN');
    }
    const currentX = this.x;
    
    this.r = Math.sqrt(currentX * currentX + value * value);
    this.theta = Math.atan2(value, currentX);
  }
};
