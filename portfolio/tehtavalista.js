var lista =["Tehtävä 1", "Tehtävä 2",]
var parent = document.getElementById("ul")

function paivitalista (){
     teht = document.getElementById("ul")
     var element = document.createElement("li");
    teht.clear
    for (lesot of lista){
        element.append(lesot)
    }
    console.log(teht)
}
var i = 0
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
        element.append(lista[i]);
        määrä--;
    })}}
    paivitalista ();

