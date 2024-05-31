function windowResized() {
  print("resized");
  resizeCanvas(windowWidth, windowHeight);
  // Update sky position and dimensions
  let skyXPos = -windowWidth / 2;
  let skyYPos = -windowHeight / 2;
  let skyWidth = windowWidth;
  let skyHeight = windowHeight / 2 + 120;
  
  // Clear waves array and create new waves
  waves = [];
  for (let i = 0; i < 99; i++) {
    waves.push(new WaveBrush(0, 148, width / 2, 200));
  }
  
  // Create new gradient sky and sea
  gradientSky = new GradientWave(skyXPos, skyYPos, skyWidth + 200, skyHeight, amplitude, yPercent1, yPercent2, color0, color1, color2, color3);
  gradientSea = new GradientWave(skyXPos, 150, skyWidth + 200, skyHeight, amplitude, yPercent1, yPercent2, color3, color2, color1, color0);

  // Update rainbow position
  rainbow = new Rainbow(-windowWidth , -windowHeight / 4, 300, windowWidth);
}

let building;
let water;
let gradientSky;
let gradientSea;
let waves = [];
let rainbow;

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  // Initialize objects
  water = new Water();
  building = new Building(width / 2, height, 128, 0, 128); // Initial color is purple
  
  // Set sky position and dimensions
  let skyXPos = -windowWidth / 2;
  let skyYPos = -windowHeight / 2;
  let skyWidth = windowWidth;
  let skyHeight = windowHeight / 2 + 120;
  
  // Gradient wave parameters
  let amplitude = 50;
  let yPercent1 = 0.2;
  let yPercent2 = 0.5;
  
  // Colors for gradient
  let color0 = color(30, 70, 140, 100); // Navy
  let color1 = color(100, 150, 105); // Green
  let color2 = color(230, 180, 50, 100); // Yellow
  let color3 = color(160, 80, 50, 100); // Red
  
  // Create gradient sky and sea
  gradientSky = new GradientWave(skyXPos, skyYPos, skyWidth + 200, skyHeight, amplitude, yPercent1, yPercent2, color0, color1, color2, color3);
  gradientSea = new GradientWave(skyXPos, 150, skyWidth + 200, skyHeight, amplitude, yPercent1, yPercent2, color3, color2, color1, color0);
  
  // Initialize background shadow and building
  backgroundShadow = new BackgroundShadow(400, -120, 122);
  building = new Building(0, 120, 0, 0, 0);
  
  // Create wave objects
  for (let i = 0; i < 99; i++) {
    waves.push(new WaveBrush(0, 148, width / 2, 200));
  }
  
  // Initialize rainbow
  rainbow = new Rainbow(-windowWidth , -windowHeight / 4, 300, windowWidth);
  
  // Initialize seagulls
  seagull1 = new Seagull(-100, -300, 300, 100, 1, color(0));          // Original seagull
  seagull2 = new Seagull(-100, -100, 200, 100, 0.7, color(100)); // Smaller, lighter-colored seagull
}

function draw() {
  background("#FFFFFF");
  
  // Display gradient sky and sea
  gradientSky.display();
  gradientSea.display();

  // Draw rainbow behind the building
  let noiseValue = water.getNoiseValue();
  rainbow.display(noiseValue);

  // Draw building reflection
  building.reflection(128, 0, 128, 100); // Use appropriate alpha value for reflection

  // Update building colors and display building
  building.updateColors(noiseValue);
  building.display();
  
  // Display background shadow and water
  backgroundShadow.display();
  water.display();
  
  // Move and display seagulls
  seagull1.move();
  seagull2.move();
  seagull1.display();
  seagull2.display();

  // Update and display waves
  for (let wave of waves) {
    wave.edges();
    wave.flock(waves, 1, 0, 1);
    wave.update();
    wave.display(1, 1, 55, 0, 255);
  }
}