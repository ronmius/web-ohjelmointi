function poimi (){
    sana = document.getElementById("text").value
    numero = Number(document.getElementById("number").value)
    var poimija = sana.at(numero)
    div = document.getElementById("pomi")
    div.append(poimija)
}
function Löydä (){
    var teksti1 = document.getElementById("teksti1").value;
    var teksti2 = document.getElementById("teksti2").value;
    var test = teksti1.indexOf(teksti2)
    var div = document.getElementById("löytävä");
    div.append(test);
}
function Leikaa (){
    var teksti = document.getElementById("toksti").value;
    var numero1 = Number(document.getElementById("numero").value);
    var numero2 = Number(document.getElementById("numero2").value);
    var div = document.getElementById("Loikaa");
    var slice = teksti.slice(numero1,numero2)
    div.append(slice)
}
function Korjaa(){
    var koko=document.getElementById("korjaus1").value
    var korjattava =document.getElementById("korjaus2").value
    var korjaaja=document.getElementById("korjaus3").value
    var div = document.getElementById("Etsi")
    korjattu = koko.replaceAll(korjattava,korjaaja)
    div.append(korjattu)
}
function pilkojja (){
    var teksti = document.getElementById("pokkitava").value;
    var poikkiva = document.getElementById("poikkiva").value;
    var ul = document.getElementById("empty")
    var splitter = teksti.split(poikkiva)
    for(sanat in splitter){
        const lista=document.createElement("li")
        lista.append(splitter[sanat])
        ul.append(lista)
    }

}