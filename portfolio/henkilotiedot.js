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
        job: "opiskelija",
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


function LuoRivit (){
    reveat = document.getElementById("rivit")
    console.log(reveat)
    reveat.clear
    henkilöt.forEach(hlö => {
        var rivi = document.createElement("tr")
        var nimi = document.createElement("td")
        var ika =document.createElement("td")
        var työ = document.createElement("td")
        var ajaa = document.createElement("td")
        
        nimi.innerHTML = hlö.name
        ika.innerHTML = hlö.age
        työ.innerHTML = hlö.job
        ajaa.innerHTML = hlö.driversLicense
        rivi.append(nimi,ika,työ,ajaa)

        reveat.append(rivi)
    });
}
LuoRivit ()