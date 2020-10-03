var resultEle = document.body.querySelector(".result");

var warriors = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
]

for (var i=0; i<warriors.length; i++){
  if(warriors[i].warrior=true && warriors[i].damage>=2 && warriors[i].health>=10){
    var personEle = document.createElement("div");
    personEle.innerHTML=warriors[i].name;
    resultEle.appendChild(personEle);
  }
  if(warriors[i].name.includes("a")){
    personEle.style.color="red"
  }
}