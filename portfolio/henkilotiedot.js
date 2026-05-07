let henkilöt = [
    {
        name: "Helena heikäläinen",
        age: 30,
        job: "Ohjelmistosuunitelija",
        driversLicense: false
    },
    {
        name: "Semir Sikäläinen",
        age: 18,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Tomas Täkäläinen",
        age:22,
        job: "linja-autonkuljettaja",
        driversLicense: true
    },
    {
        name: "Merja Meikäläinen",
        age: 20,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Teppo Teikäläinen",
        age: 25,
        job: "Sähköteknikko",
        driversLicense: true
    }
]

LuoRivit (e)
function LuoRivit (e){
    e.preventDefault()
    reveat = document.getElementById("rivit")
    console.log(reveat)
    reveat.clear
    // lisättävän henkilön tiedot otetaan näillä
    var lisnim = document.getElementById("Nimi").value;
    var lisika = Number(document.getElementById("Ikä").value);
    var listyö = document.getElementById("Työ").value;
    var lisajo = Boolean(document.getElementById("Ajokortti"));
    if (lisika <0){alert('ikä pitää olla suurempi kuin nolla')};
    
    console.log(lisajo);
    henkilöt.push({name:lisnim,age:lisika,job:listyö,driversLicense:lisajo});
    console.log(henkilöt)
    henkilöt.forEach(hlö => {//tämän avulla tehdään oikea määrä rivejä ja muutujia
        var rivi = document.createElement("tr")
        var nimi = document.createElement("td")
        var ika =document.createElement("td")
        var työ = document.createElement("td")
        var ajaa = document.createElement("td")
        
        nimi.innerHTML = hlö.name
        if (hlö.age >17){//jos henkilö on yli 18 tulee sen viereen kalja
            ika.innerHTML = `${hlö.age}🍺`
        }
        else
            {ika.innerHTML = hlö.age}
        if (hlö.job == "Opiskelija"){
            työ.innerHTML= `${hlö.job} 🎓`//jos henkilö on opiskelija lakki tulee sen viereen
        }
        else{työ.innerHTML = hlö.job}
        ajaa.innerHTML = hlö.driversLicense
        rivi.append(nimi,ika,työ,ajaa)
        reveat.append(rivi)
    });
}
function sulje (e){
    e.preventDefault();
    const diolg =document.getElementById("lisaa");
    diolg.close()
}