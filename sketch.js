var ball;
var database,position;
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var Locofchild=database.ref("Ball/Positions");
    Locofchild.on("value",readop,showerr);

}

function draw(){

    background("white");
    if(keyDown(LEFT_ARROW)){
       writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("Ball/Positions").set({
        x: ball.x + x,
        y: ball.y + y
    })
    
   
}
function readop(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}
function showerr(){
    console.log("error");
}