alert("gambling")
function noppa (){
    var div = document.getElementById("noppa")
    var rand = Math.round(Math.random() * 6);
    div.append(rand)
}
function Lotto(){
    var div = document.getElementById("Lotto")
    var ekanumero = Math.round(Math.random() * 40);
    var tokanumero = Math.round(Math.random() * 40);
    var kolmasnumero = Math.round(Math.random() * 40);
    var neljäsnumero = Math.round(Math.random() * 40);
    var viidesnumero = Math.round(Math.random() * 40);
    var kuudesnumero = Math.round(Math.random() * 40);
    //tehdään seitsemän muutujaa jotka ovat randomeita
    var seitsemännesnumero = Math.round(Math.random() * 40);
    div.append(ekanumero, tokanumero, kolmasnumero, neljäsnumero, viidesnumero, kuudesnumero, seitsemännesnumero)
}//lisätään  seitsemän random numeroa div elementiin