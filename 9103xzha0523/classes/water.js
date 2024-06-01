class Water {
  constructor() {
    this.yoff = 0;
    this.noiseValue = 0;
  }
  
  display(array) {
    let counter = 0;
    fill(50, 0, 50, 122);
    beginShape();
    noStroke();
    let xoff = 0;
    let steps = 0;
    if (array > 0) {
      steps = width / array.length;
    } else {
      steps = 10;
    }
    for (let x = -width / 2; x < width / 2; x += steps) {
      let y = 0;
      if (array > 0) {
        y = map(array[counter] / 255, 0, 1, 60, 100);
      } else {
        y = map(noise(xoff, this.yoff), 0, 1, 60, 100);
      }
      counter += 1;
      vertex(x, y);
      xoff += 0.05;
    }
    this.yoff += 0.01;
    vertex(width / 2, 60);
    vertex(width / 2, height);
    vertex(-width / 2, height);
    endShape(CLOSE);
    this.noiseValue = noise(this.yoff);
  }

  getNoiseValue() {
    return this.noiseValue;
  }
}