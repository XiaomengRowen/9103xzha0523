# Creative Coding Major Assignment-Individual Task for Perlin noise and randomness
I choose perlin noise to drive my individual code, here is the detail instructions on the interact work.
## Color Transition Animation of the Main Building
The building is a fixed element in the scene, with its color changing based on the noise value to simulate light and shadow effects. It serves as the central element of the scene, contrasting with the background and other dynamic elements such as the rainbow and seagulls.
Building on our group's code, I used Perlin noise values to gradually transition the main building's color from purple to black, symbolizing the shift from noon to dusk.   Specifically, I used noise values to adjust the red and blue components of the purple channel while decreasing the brightness, achieving the color change of the building.

## Dynamic Effect of the Halo
The rainbow halo is positioned on the upper left side of the screen. It appears behind the building, with a gradient sky and sea in the background, creating a harmonious and ethereal visual effect. The rainbow always surrounds the main building, acting like the light produced by the building, making it a background element and adding visual depth to the scene.

The position and colors of the rainbow halo change with the Perlin noise value, dynamically adjusting its arc and thickness based on noise values.

## The Flying Effect of Seagulls
The seagulls are two birds flying in the sky, using Perlin noise to achieve smooth motion paths. The two seagulls, each with unique initial positions, independently animate their wings with an oscillating motion. The first seagull is larger and darker, while the second is smaller and lighter-colored.

During each frame of the draw loop, the seagulls update their positions and are redrawn on the screen. Their positions dynamically adjust to screen resizing, maintaining visual appeal across different screen sizes.