
var form,isAccident=false;
var database,allHospitals
var victim,backgroundImg
function preload(){
//backgroundImg=loadImage("images/background.jpg")

}
function setup() {
  var canvas=createCanvas(displayWidth,displayHeight);
   database=firebase.database()
   form=new Form();
   form.display();
   victim=new Victim();
}

function draw() {
  background(255);   
  if(isAccident) 
  {
    clear();
    victim.getHospitalInfo();
    victim.displayInfo();
    //isAccident=false;
  }
}