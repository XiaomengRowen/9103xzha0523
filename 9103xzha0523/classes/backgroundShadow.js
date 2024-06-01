class BackgroundShadow {
  constructor(xPos, yPos, opacity) {
    // Initialize properties
    this.xPos = xPos;
    this.yPos = yPos;
    this.opacity = opacity;
    this.noiseOffset = random(1000); // Offset for Perlin noise
    this.R = 112;
    this.G = 103;
    this.B = 114;
  }

  display() {
    push();
    // Move the building to position
    translate(this.xPos, this.yPos);
    scale(3);
    // Draw the shadow with a blur effect
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = 5;
    drawingContext.shadowBlur = 50;
    drawingContext.shadowColor = 'rgba(93, 80, 96, 0.7)'; // Shadow color with transparency

    // Disable the stroke for the shape
    noStroke();

    // Draw the original building shape
    this.drawBuilding();
    pop();

    // Increment noise offset for the next frame
    this.noiseOffset += 0.01;
  }

  drawBuilding() {
    fill(this.R, this.G, this.B, this.opacity); // Shape color with updated values
    beginShape();
    vertex(53, 0);
    vertex(55, 2);
    vertex(59, 16);
    vertex(61, 16);
    vertex(63, 24);
    vertex(68, 24);
    vertex(71, 34);
    vertex(71, 47);
    vertex(76, 51);
    vertex(76, 55);
    vertex(81, 58);
    vertex(81, 72);
    vertex(0, 72);
    vertex(0, 60);
    vertex(4, 52);
    vertex(9, 52);
    vertex(9, 43);
    vertex(14, 36);
    vertex(26, 36);
    vertex(30, 41);
    vertex(31, 51);
    vertex(36, 51);
    vertex(38, 46);
    vertex(38, 38);
    vertex(38, 34);
    vertex(45, 24);
    vertex(50, 24);
    vertex(50, 17);
    vertex(53, 17);
    vertex(53, 0);
    endShape(CLOSE);
  }

  updateColors(noiseValue) {
    // Interpolate between initial color (112, 103, 114) and pink (255, 192, 203)
    this.R = lerp(112, 255, noiseValue);
    this.G = lerp(103, 192, noiseValue);
    this.B = lerp(114, 203, noiseValue);
  }
}