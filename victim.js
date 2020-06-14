class Victim{
constructor(){
//this.name=name;
//this.contact=contact;
this.highwayno=null;

this.state=null;
//this.severity=severity
}
async getHospitalInfo(){
console.log("Getting info" + this.highwayno);
//isAccident=false;
var ref=await database.ref('karnataka')
ref.orderByKey().equalTo(this.highwayno).on("value",(data)=>{
//if(allHospitals!==undefined){
     allHospitals=data.val();
     
})

}
displayInfo(){
if(allHospitals !==undefined){
     console.log(allHospitals)
     var displayPos=150
for(var i in allHospitals){
      var jhospital = allHospitals[i]
 if(jhospital !== undefined){
     for(var k in jhospital){
        console.log(jhospital[k])
        fill ("red")
        textSize(12)
        text("Hospital :"+jhospital[k].name,550,displayPos)
        text("Hospital address:"+jhospital[k].address,550,displayPos+20)
        text("Hospital contact:"+jhospital[k].contact,550,displayPos+40)
        displayPos=displayPos+80
        }
     }
}

}
}

}
