console.log("lasketaan")
a = 3
b=5
c=7
d=15
function summa (){
    alert(a+b)
}
function vahennys(){
    alert(a-b)
}
function kerto (){
    alert (a*b)
}
function jako (){
    alert(a/b)
}
function laskin_summa (){
    ekluku = Number(document.getElementById("ekluku").value);
    tokluku = Number(document.getElementById("tokluku").value);
    a = ekluku
    b = tokluku
    summa ()
}
function laskin_vähennys (){
    ekluku = Number(document.getElementById("ekluku").value);
    tokluku = Number(document.getElementById("tokluku").value);
    a = ekluku
    b = tokluku
    vahennys ()
}
function laskin_kerto(){
    ekluku = Number(document.getElementById("ekluku").value);
    tokluku = Number(document.getElementById("tokluku").value);
    a = ekluku
    b = tokluku
    kerto ()
}
function laskin_jako (){
    ekluku = Number(document.getElementById("ekluku").value);
    tokluku = Number(document.getElementById("tokluku").value);
    a = ekluku
    b = tokluku
    jako ()
}
var joknaik= new Date()
function paivamaara (){
    aika = joknaik.getDate()
    console.log(aika)
}
function aika(){
    var tunti = joknaik.getHours()
    var min=joknaik.getMinutes()
    var sec=joknaik.getSeconds()
    console.log(tunti,min,sec)
    console.log(aika)
}
function aikajapaiva (){
    var taika=joknaik.getDate()
    var tunti = joknaik.getHours()
    var min=joknaik.getMinutes()
    var sec=joknaik.getSeconds()
    console.log(taika,tunti,min,sec)
}
function viikonpaiva (){
    var paiva = ""
    var  taika=joknaik.getDay().value
    if (taika = 0){paiva = "sunnuntai"}
    if (taika = 1){paiva = "maanantai"}
    if(taika=2){paiva = "tiistai"}
    if(taika =3){paiva ="keskiviiko"}
    if(taika =4){paiva="torstai"}
    if(taika=5){paiva="perjantai"}
    if(taika=6){paiva="lauantai"}
    console.log(paiva)
    console.log(taika)
}
function kuukausi (){
    var taika = joknaik.getMonth()
    console.log(taika)
}
var Veijo = new Set(['luku','poisto'])
var Elvira = new Set(['luku', 'kirjoitus', 'muokkaus'])
var Mehdi = new Set (['luku', 'muokkaus', 'poisto'])
var Tuuli = new Set (['kirjoitus', 'poisto'])
var Veijotuul = Veijo.union(Tuuli)
var Mehdielvira = Mehdi.intersection(Elvira)
var Elviratuuli = Elvira.symmetricDifference(Tuuli)
for(oikeudet of Veijo){
    var lista = document.createElement("li")
    lista.append(oikeudet)
    var ekaul = document.getElementById("ekalista")
    ekaul.append(lista)
}

for(oikeudet of Elvira){
    var lista = document.createElement("li")
    lista.append(oikeudet)
    var ekaul = document.getElementById("tokalista")
    ekaul.append(lista)
}

for(oikeudet of Mehdi){
    var lista = document.createElement("li")
    lista.append(oikeudet)
    var ekaul = document.getElementById("kolista")
    ekaul.append(lista)
}


for(oikeudet of Tuuli){
    var lista = document.createElement("li")
    lista.append(oikeudet)
    var ekaul = document.getElementById("nelista")
    ekaul.append(lista)
}

for(oikeudet of Veijotuul){
    var lista = document.createElement("li")
    lista.append(oikeudet)
    var ekaul = document.getElementById("Veijotuuli")
    ekaul.append(lista)
}

for(oikeudet of Mehdielvira){
    var lista = document.createElement("li")
    lista.append(oikeudet)
    var ekaul = document.getElementById("Mehdielvira")
    ekaul.append(lista)
}

for(oikeudet of Elviratuuli){
    var lista = document.createElement("li")
    lista.append(oikeudet)
    var ekaul = document.getElementById("Elviratuuli")
    ekaul.append(lista)
}