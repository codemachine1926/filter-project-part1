function preload() {
    
}
function setup() {
    webcam1 = createCanvas(360,300);
    webcam1.position(255,200);
}
function draw() {

}
function take_snapshot() {
    save("filter_image.png");
}