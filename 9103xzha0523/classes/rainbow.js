class Rainbow {
  constructor(xPos, yPos, maxRadius, screenWidth) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.maxRadius = maxRadius;
    this.screenWidth = screenWidth;
    // Independent noise offset for the rainbow
    this.noiseOffset = random(1000);
  }

  display(noiseValue) {
    push();
    translate(this.xPos, this.yPos);
    noFill();
    
    // Array of colors for the rainbow bands
    let colors = [
      color(226, 107, 125), // Red
      color(231, 130, 146), // pink
      color(234, 150, 164), // light pink
      color(254, 225, 195), // yellow
      color(165, 183, 234), // Blue
      color(126, 82, 175), // Indigo
      color(121, 125, 163) // grey
    ];

    // Adjust the thickness of the bands based on the noise value
    let thickness = map(noiseValue, 0, 1, 10, 30);

    // Draw the rainbow bands from outermost to innermost
    for (let i = colors.length - 1; i >= 0; i--) {
      stroke(colors[i]);
      strokeWeight(thickness);
      let radius = this.maxRadius - i * thickness;
      // Draw each band as an arc
      arc(0, 0, this.screenWidth * 3, radius, TWO_PI, PI);
    }
    pop();
  }
}