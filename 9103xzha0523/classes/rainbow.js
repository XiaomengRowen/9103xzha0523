class Rainbow {
  constructor(xPos, yPos, maxRadius, screenWidth) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.maxRadius = maxRadius;
    this.screenWidth = screenWidth;
    this.noiseOffset = random(1000); // Independent noise offset for the rainbow
  }

  display(noiseValue) {
    push();
    translate(this.xPos, this.yPos);
    noFill();
    let colors = [
      color(238, 89, 87), // Red
      color(255, 165, 0), // Orange
      color(255, 217, 72), // Yellow
      color(254, 225, 195), // Green
      color(165, 183, 234), // Blue
      color(126, 82, 175), // Indigo
      color(121, 125, 163) // Violet
    ];

    let thickness = map(noiseValue, 0, 1, 10, 30); // Adjust the thickness based on noise value

    for (let i = colors.length - 1; i >= 0; i--) {
      stroke(colors[i]);
      strokeWeight(thickness);
      let radius = this.maxRadius - i * thickness;
      arc(0, 0, this.screenWidth* 3, radius, TWO_PI, PI);
    }
    pop();
  }
}
