function preload(){

}
function setup(){
    canvas= createCanvas(600,400)
    canvas.center()
    camera = createCapture(VIDEO)
    camera.hide()
}

function draw(){
image(camera, 150,50,300,300)
fill("red")
circle(125,29,50)
circle(120,365,50)
circle(480,370,50)
circle(480, 29,50)
fill("green")
rect(148,14,309,30)
rect(144,353,312,30)
rect(110,50,30,298)
rect(467,50,30,300)
}

function save(){

}