var lista =[""]


function paivitalista (){
    var teht = document.getElementById("ul");
    teht.innerHTML =[""] 
    lista.forEach(loista =>{
        var Alement = document.createElement("li");
        
        teht.append(Alement)
        Alement.append(lista);
        u++;
    })}
var i = -1
var u = 0
function listest (){
    lisattava = document.getElementById("sana").value;
    teht = document.getElementById("ul");
    määrä = Number(document.getElementById("monta").value);
    lista.push(lisattava);
    console.log(määrä);
    while (i<määrä){
        lista.forEach(loista =>{
            var element = document.createElement("li");
            teht.append(element);
            element.append(lista[u]);
            u++;
        })
        määrä--;}
    paivitalista ();}
    

