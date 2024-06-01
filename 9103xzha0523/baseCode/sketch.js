function windowResized() {
  print("resized"); // Prints "resized" to the console when the window is resized
  resizeCanvas(windowWidth, windowHeight); // Resizes the canvas to match the new window dimensions

  // Setting positions and dimensions for the sky
  let skyXPos = -windowWidth / 2;
  let skyYPos = -windowHeight / 2;
  let skyWidth = windowWidth;
  let skyHeight = windowHeight / 2 + 120;

  // Reinitializing waves array with new wave instances
  waves = [];
  for (let i = 0; i < 99; i++) {
    waves.push(new WaveBrush(0, 148, width / 2, 200));
  }

  // Reinitializing gradient sky and sea with new GradientWave instances
  gradientSky = new GradientWave(skyXPos, skyYPos, skyWidth + 200, skyHeight, amplitude, yPercent1, yPercent2, color0, color1, color2, color3);
  gradientSea = new GradientWave(skyXPos, 150, skyWidth + 200, skyHeight, amplitude, yPercent1, yPercent2, color3, color2, color1, color0);

  // Reinitializing rainbow with a new Rainbow instance
  rainbow = new Rainbow(-windowWidth, -windowHeight / 4, 300, windowWidth);
}

// Variables for different elements in the scene
let building;
let water;
let gradientSky;
let gradientSea;
let waves = [];
let rainbow;
let effectLayer;

function setup() {
  angleMode(DEGREES); // Set angle mode to degrees
  createCanvas(windowWidth, windowHeight, WEBGL); // Create a canvas with WEBGL renderer

  water = new Water(); // Create a new Water instance
  building = new Building(width / 2, height, 128, 0, 128); // Create a new Building instance

  // Setting initial positions and dimensions for the sky
  let skyXPos = -windowWidth / 2;
  let skyYPos = -windowHeight / 2;
  let skyWidth = windowWidth;
  let skyHeight = windowHeight / 2 + 120;

  // Variables for gradient waves
  let amplitude = 50;
  let yPercent1 = 0.2;
  let yPercent2 = 0.5;

  // Colors for the gradient waves
  let color0 = color(30, 70, 140, 100);
  let color1 = color(100, 150, 105);
  let color2 = color(230, 180, 50, 100);
  let color3 = color(160, 80, 50, 100);

  // Initializing gradient sky and sea
  gradientSky = new GradientWave(skyXPos, skyYPos, skyWidth + 200, skyHeight, amplitude, yPercent1, yPercent2, color0, color1, color2, color3);
  gradientSea = new GradientWave(skyXPos, 150, skyWidth + 200, skyHeight, amplitude, yPercent1, yPercent2, color3, color2, color1, color0);

  // Creating new BackgroundShadow and Building instances
  backgroundShadow = new BackgroundShadow(400, -120, 122);
  building = new Building(0, 120, 0, 0, 0);

  // Initializing the waves array with new wave instances
  for (let i = 0; i < 99; i++) {
    waves.push(new WaveBrush(0, 148, width / 2, 200));
  }

  // Initializing the rainbow
  rainbow = new Rainbow(-windowWidth, -windowHeight / 4, 300, windowWidth);

  // Creating new Seagull instances
  seagull1 = new Seagull(-100, -300, 300, 100, 1, color(0));
  seagull2 = new Seagull(-100, -100, 200, 100, 0.7, color(100));
  seagull3 = new Seagull(100, -200, 250, 150, 0.8, color(150));
  seagull4 = new Seagull(200, -150, 220, 130, 0.6, color(200));
  seagull5 = new Seagull(-50, -250, 260, 120, 0.9, color(50));
  seagull6 = new Seagull(150, -300, 240, 110, 0.75, color(75));
  seagull7 = new Seagull(0, -350, 280, 140, 1.1, color(125));
  seagull8 = new Seagull(250, -400, 270, 130, 1.05, color(175));
  seagull9 = new Seagull(300, -450, 290, 150, 1.2, color(225));
  seagull10 = new Seagull(-200, -200, 230, 120, 0.85, color(200));
  seagull11 = new Seagull(50, -250, 220, 110, 0.7, color(220));
  seagull12 = new Seagull(300, -100, 210, 100, 0.95, color(240));

  // Creating an effect layer for additional visual effects
  effectLayer = createGraphics(windowWidth, windowHeight);
  effectLayer.colorMode(HSB, 188, 1.8, 0.8); // Set color mode to HSB for the effect layer
}

function draw() {
  background("#FFFFFF"); // Set the background color to white

  gradientSky.display(); // Display the gradient sky
  gradientSea.display(); // Display the gradient sea

  drawEffectLayer(); // Draw the effect layer

  tint(255, 127); // Apply a tint with 50% opacity
  image(effectLayer, -windowWidth / 2, -windowHeight / 2); // Draw the effect layer on the canvas

  let noiseValue = water.getNoiseValue(); // Get the noise value from the water instance
  rainbow.display(noiseValue); // Display the rainbow based on the noise value

  building.reflection(128, 0, 128, 100); // Display the building's reflection

  building.updateColors(noiseValue); // Update the building colors based on the noise value
  building.display(); // Display the building

  backgroundShadow.updateColors(noiseValue); // Update the background shadow colors based on the noise value
  backgroundShadow.display(); // Display the background shadow
  water.display(); // Display the water

  // Move and display each seagull
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

  // Update and display each wave
  for (let wave of waves) {
    wave.edges();
    wave.flock(waves, 1, 0, 1);
    wave.update();
    wave.display(1, 1, 55, 0, 255);
  }
}

function drawEffectLayer() {
  effectLayer.background(1); // Set the background of the effect layer
  effectLayer.clear(); // Clear the effect layer

  var n = 455; // Number of particles
  var t = frameCount * 0.05; // Time variable for animation
  var dt = 0.05; // Time step
  var myscale = windowWidth < windowHeight ? windowWidth / 20.0 : windowHeight / 20.0; // Scale based on window dimensions

  // Loop to create particles
  for (var i = 0; i < n; i++) {
    var theta = 2.39986 * i; // Angle for particle position
    var r = myscale * sqrt(i); // Radius for particle position
    effectLayer.noStroke(); // No stroke for particles
    var s = i / float(n); // Scale factor for particle color
    effectLayer.fill(360 - 50 * s, 1.0 - 2.5 * s, 0.6 + s); // Set fill color for particles

    var effect_d = myscale * (10.0 + 0.7 * cos(t + r)); // Diameter of particles
    effectLayer.ellipse(0.5 * windowWidth + r * tan(theta), 0.5 * windowHeight + r * cos(theta), effect_d, effect_d); // Draw the particle
  }
}