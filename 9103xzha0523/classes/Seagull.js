class Seagull {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.wingAngle = 0;
    this.wingSpeed = 0.1;
    this.noiseOffsetX = random(1000); // Offset for Perlin noise in x direction
    this.noiseOffsetY = random(1000); // Offset for Perlin noise in y direction
  }

  display() {
    push();
    translate(this.x, this.y);
    stroke(this.color);
    noFill();
    strokeWeight(2);
    scale(this.size);
    
    // Draw left wing
    beginShape();
    vertex(-20, 0);
    vertex(-10, -10);
    vertex(0, 0);
    endShape();
    
    // Draw right wing
    beginShape();
    vertex(0, 0);
    vertex(10, -10);
    vertex(20, 0);
    endShape();
    
    pop();

    // Update wing angle for next frame
    this.wingAngle += this.wingSpeed;
  }

  move() {
    // Update position using Perlin noise
    this.x = noise(this.noiseOffsetX) * width;
    this.y = noise(this.noiseOffsetY) * height;

    // Increment noise offsets for next frame (slower speed)
    this.noiseOffsetX += 0.005;
    this.noiseOffsetY += 0.005;
  }
}

let seagull1;
let seagull2;

function setup() {
  createCanvas(800, 600);
  seagull1 = new Seagull(100, 300, 1, color(0));          // Original seagull
  seagull2 = new Seagull(200, 350, 0.7, color(100)); // Smaller, lighter-colored seagull
}

function draw() {
  clear(); // Clear the canvas to avoid trailing effect
  seagull1.display();
  seagull1.move();
  seagull2.display();
  seagull2.move();
}