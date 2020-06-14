class Form{
constructor(){
this.name=createInput('name :');
this.contact=createInput('Contact :');
this.highwayno=createInput('Highway number :');
this.state=null;
//this.severity=createSelect('Severity :');
this.submit=createButton('submit : ')
this.stateselect=createSelect('State:')
this.item=0;
}
async display(){
this.name.position(500,120)
this.contact.position(500,150)
this.highwayno.position(500,180)
this.stateselect.position(500,210)
//this.severity.position(100,150)
this.submit.position(550,240)

var title=createElement('h1')
title.html("HIGHWAY RESCUE")
title.position(450,10)

var subtitle=createElement('h4')
subtitle.html("Kindly fill the form to save lives.")
subtitle.position(500,50)
//this.severity.option('1')
//this.severity.option('2')
//this.severity.option('3')
//this.severity.option('4')
//this.severity.option('5')
//this.severity.changed(function(){this.severity});
var stateref=await database.ref('State').once("value")
if(stateref.exists()){
var stateoptions=stateref.val();
for(var i=1;i<5;i++){
    this.stateselect.option(stateoptions[i])
    }
}

this.stateselect.changed(()=>{
this.state=this.stateselect.value()

})
console.log(this.state)
this.submit.mousePressed(()=>{
    this.name.hide();
    this.contact.hide();
    this.highwayno.hide();
    this.stateselect.hide();
   // this.severity.hide();
    this.submit.hide();
    victim.highwayno=this.highwayno.value();
    victim.state=this.state
    isAccident=true;

 

   
})
}

}