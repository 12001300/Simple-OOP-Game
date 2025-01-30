function Character(name,strenght,health){
    this.name=name;
    this.strenght=strenght;
    this.health=health;
    this.elements=new UIElements(this.name)
}
function UIElements(name){
    this.attackBtn=document.querySelector(`#${name}-attack`);
    this.healBtn=document.querySelector(`#${name}-make-health`);
    this.alive=document.querySelector(`#${name}-alive`);
   this.statusBtn=document.querySelector(`#${name}-status`)
    this.progress=document.querySelector(`.${name}-health span`);
}

Character.prototype.attack=function(opponent){
    if (opponent.health > 0){
        
        opponent.health -= this.strenght;
     opponent.elements.progress.style.width = `${opponent.health}%`
 }
 else{
    opponent.elements.attackBtn.remove();
    opponent.elements.healBtn.remove();
    opponent.elements.statusBtn.remove();
     

    opponent.elements.alive.innerHTML=`${opponent.name} is died`
 }

}
Character.prototype.status = function(){
    let personInfo= document.querySelector(`.${this.name}-info`);

    personInfo.style.opacity="1";
    personInfo.innerHTML=`<p> Name : ${this.name}</p>
    <p> Strenght : ${this.strenght}</p>
    <p> Health : ${this.health}</p>
    `

  
}
Character.prototype.makeHealth=function(){
    if(this.health<100){

        this.health +=10
        this.elements.progress.style.width=`${this.health}%`
    }
    if (this.health>=100){
        this.health=100;
         this.elements.progress.style.width=`100%`

    }
}



let nartoo= new Character("nartoo",10,100)
let saski= new Character("saski",5,100)
nartoo.elements.attackBtn.addEventListener("click",function(e){
 e.preventDefault()
    nartoo.attack(saski)
    if(document.querySelector(`.saski-info`).style.opacity="1"){
        saski.status();
     }
})
nartoo.elements.healBtn.addEventListener("click",function(e){
 e.preventDefault()
nartoo.makeHealth()
if(document.querySelector(`.nartoo-info`).style.opacity="1"){
    nartoo.status();
 }
})  

saski.elements.attackBtn.addEventListener("click",function(e){
    e.preventDefault()
    saski.attack(nartoo);
    if(document.querySelector(`.nartoo-info`).style.opacity="1"){
        nartoo.status();
     }
  
})
saski.elements.healBtn.addEventListener("click",function(e){
    e.preventDefault()
   saski.makeHealth()
   if(document.querySelector(`.saski-info`).style.opacity="1"){
    saski.status();
 }
   })
nartoo.elements.statusBtn.addEventListener("click",function(e){
    e.preventDefault()
    nartoo.status()
})
saski.elements.statusBtn.addEventListener("click",function(e){
    e.preventDefault()
    saski.status()
})