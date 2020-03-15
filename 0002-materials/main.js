function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    frameRate(60);
}

function draw() {
    background(0);
    // Normal Material
    // normalMaterial();
    // Ambient Material
    // Need a light when use ambient material
    ambientLight(127);
    pointLight(255, 255, 255, -100, -100, 400);
    // ambientMaterial(255);
    specularMaterial(255);
    noStroke();

    push();
    {
        rotateY(frameCount / 60.0);
        push();
        translate(-width / 6.0, 0, 0);
        rotateY(frameCount / 30.0);
        sphere(height / 4.0)
        pop();
        push();
        translate(width / 6.0, 0, 0);
        rotateY(frameCount / 30.0);
        box(height / 3.0)
        pop();
    }
    pop();
}