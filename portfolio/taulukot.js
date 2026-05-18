var numerot = [8, 3, 55, 420, 1, -5, 69, -999, 0, 321];
var sanat = ["skibidi", "rizz", "gyat", "sigma", "sus", "cap", "yeet", "lit", "simp", "cringe"];

function poimi (){
    var numero = Number(document.getElementById("ekanumero").value)
    var div = document.getElementById("division")
    sama = sanat[numero-1]
    div.innerHTML= ""
    div.append(sama)
}
function Löydä (){
    var div=document.getElementById("toinendivision");
    teksti=document.getElementById("ekateksti").value;
    div.innerHTML=""
    löytyi =sanat.indexOf(teksti)+1;
    div.append(löytyi) 

}
function leikaa (){
    var ul = document.getElementById("empty ul")
    var numero1 =Number(document.getElementById("number1").value);
    var numero2=Number(document.getElementById("number2").value);
    lista = sanat.slice(numero1,numero2)
    for(sanat in lista){
        li = document.createElement("li")
        li.append(lista[sanat])
        ul.append(li)
    }
}

function Tulosta (){
    var ul = document.getElementById("kolmas tyhjä")
    ul.innerHTML = ""
    sanat.forEach( sna=> {
        li = document.createElement("li")
        li.append(sna)
        ul.append(li)
    })
}
function järjestä (){
    var ul = document.getElementById("kolmas tyhjä")
    ul.innerHTML = ""
    var järjestys = sanat.sort()
    järjestys.forEach(sma=>{
        li = document.createElement("li")
        li.append(sma)
        ul.append(li)
    })
}
function kääntö (){
    var ul = document.getElementById("kolmas tyhjä")
    ul.innerHTML = ""
    käänte = sanat.reverse()
    käänte.forEach(sma=>{
        li = document.createElement("li")
        li.append(sma)
        ul.append(li)
    })
}
function Tulostanum (){
    var ul = document.getElementById("kolmas tyhjä")
    ul.innerHTML = ""
    numerot.forEach( sna=> {
        li = document.createElement("li")
        li.append(sna)
        ul.append(li)
    })
}
function järjestänum (){
    var ul = document.getElementById("kolmas tyhjä")
    ul.innerHTML = ""
    var järjestys = numerot.sort()
    järjestys.forEach(sma=>{
        li = document.createElement("li")
        li.append(sma)
        ul.append(li)
    })
}
function kääntönum (){
    var ul = document.getElementById("kolmas tyhjä")
    ul.innerHTML = ""
    käänte = numerot.reverse()
    käänte.forEach(sma=>{
        li = document.createElement("li")
        li.append(sma)
        ul.append(li)
    })
}
//tyhjä num
function Tuolstinnumerot (){
    var ul = document.getElementById("tyhjä num")
    ul.innerHTML = ""
    numerot.forEach( sna=> {
        li = document.createElement("li")
        li.append(sna)
        ul.append(li)
    })
}
var luku = 0
var emptylost = [""]
function suuremmot (value){
    return value > luku
}
function pinimmät (value){
    return value < luku
}

function pienemmät (){
    var ul = document.getElementById("tyhjä num")
    ul.innerHTML= ""
    numero = Number(document.getElementById("valinta").value)
    luku = numero
    numerot = numerot.filter(pinimmät)
    ul.append(numerot)
}
function Suuremmat (){
    var ul = document.getElementById("tyhjä num")
    ul.innerHTML= ""
    numero = Number(document.getElementById("valinta").value)
    luku = numero
    numerot = numerot.filter(suuremmot)
    ul.append(numerot)

}