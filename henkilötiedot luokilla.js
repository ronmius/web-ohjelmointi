ike = false
toita= false
class Person{
    constructor(name,age,job,driverslicense){
        this.name = name;
        this.age = age;
        this.job = job;
        this.driverslicense = driverslicense}
    isunderage (){
        if (this.age<18){
           return true
        }
        else{
            return false
        }}
    isStudent (){
        if (this.job=="Opiskelija"){
            
            return true
        }
        else{
            return false
            
        }
    }
}
var henkilista = document.getElementById("rivit")
const persons = [ 
        new Person("Helena heikäläinen", 30, "Ohjelmistosuunitelija",false),
        new Person("Semir Sikäläinen", 18,"Opiskelija",true,),
        new Person( "Tomas Täkäläinen",22,"linja-autonkuljettaja",true),
        new Person("Merja Meikäläinen",20,"Opiskelija",true),
        new Person("Teppo Teikäläinen",25,"Sähköteknikko",true)
]



function jotain (){
    henkilista.innerHTML=""
    persons.forEach(hlö=>{
        var rivi = document.createElement("tr")
        var nimi = document.createElement("td")
        var ika =document.createElement("td")
        var työ = document.createElement("td")
        var ajaa = document.createElement("td")
        nimi.innerHTML = hlö.name
        if(hlö.isunderage()){
            ika.innerHTML= `${hlö.age}🍺`
            
        }
        else{
            ika.innerHTML=hlö.age;
        }
        if(hlö.isStudent()){
            työ.innerHTML = `${hlö.job} 🎓`
        }
        else{
            työ.innerHTML = hlö.job
        }
        
        ajaa.innerHTML = hlö.driverslicense
        rivi.append(nimi,ika,työ,ajaa)
        henkilista.append(rivi)
})}