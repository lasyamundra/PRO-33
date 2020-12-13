var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0;
var count = 0;

var gameState = "start";
var particle;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground (width/2, 797 ,1000, 5);


   for (var k = 0; k <=width; k = k + 80) 
   {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
     plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
     plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
     plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
     plinkos.push(new Plinko(j,375));
    }

  Engine.run(engine);
}
 


function draw() {
  background("black");
  
  textSize(20)
  text("Score : "+score,20,30);

  //text display for score 500
  textSize(20)
  fill (255,255,255)
  text("500",20,520);

  textSize(20)
  text("500",100,520);

  textSize(20)
  text("500",180,520);

  textSize(20)
  text("500",260,520);

  //text display for score 100
  textSize(20)
  text("100",340,520);

  textSize(20)
  text("100",420,520);

  textSize(20)
  text("100",500,520);

  //text display for score 200
  textSize(20)
  text("200",580,520);

  textSize(20)
  text("200",660,520);

  textSize(20)
  text("200",740,520);

  Engine.update(engine);

  if ( gameState =="end") {
    
    textSize(50);
    text("GameOver",400,250);
    //return
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
  for (var j = 0; j < particles.length; j++) 
  {
    particles[j].display();
  }

   ground.display();

   if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
    }

    for (var k = 0; k < divisions.length; k++) 
    {
     divisions[k].display();
    }
}

function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle = new Particle (mouseX, 10, 10, 10); 
  }   
}