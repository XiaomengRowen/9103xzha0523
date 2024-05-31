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
  seagull3 = new Seagull(100, -200, 250, 150, 0.8, color(150));  // Another seagull
  seagull4 = new Seagull(200, -150, 220, 130, 0.6, color(200));  // One more seagull
  seagull5 = new Seagull(-50, -250, 260, 120, 0.9, color(50));   // Additional seagull
  seagull6 = new Seagull(150, -300, 240, 110, 0.75, color(75));  // Additional seagull
  seagull7 = new Seagull(0, -350, 280, 140, 1.1, color(125));    // Additional seagull
  seagull8 = new Seagull(250, -400, 270, 130, 1.05, color(175)); // Additional seagull
  seagull9 = new Seagull(300, -450, 290, 150, 1.2, color(225));  // Additional seagull
  seagull10 = new Seagull(-200, -200, 230, 120, 0.85, color(200)); // Additional seagull
  seagull11 = new Seagull(50, -250, 220, 110, 0.7, color(220));   // Additional seagull
  seagull12 = new Seagull(300, -100, 210, 100, 0.95, color(240)); // Additional seagull
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
  seagull3.move();
  seagull4.move();
  seagull5.move();
  seagull6.move();
  seagull7.move();
  seagull8.move();
  seagull9.move();
  seagull10.move();
  seagull11.move();
  seagull12.move();
  
  seagull1.display();
  seagull2.display();
  seagull3.display();
  seagull4.display();
  seagull5.display();
  seagull6.display();
  seagull7.display();
  seagull8.display();
  seagull9.display();
  seagull10.display();
  seagull11.display();
  seagull12.display();

  // Update and display waves
  for (let wave of waves) {
    wave.edges();
    wave.flock(waves, 1, 0, 1);
    wave.update();
    wave.display(1, 1, 55, 0, 255);
  }
}