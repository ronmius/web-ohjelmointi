var lista =["Tehtävä 1", "Tehtävä 2"]
var parent = document.getElementById("ul")
var element = document.createElement("li")
function paivitalista (){
     teht = document.getElementById("ul")
    teht.clear
    for (lesot of lista){
        element.append(lesot)
    }
    console.log(teht)
}
function lisaa (){
    lisattava = document.getElementById("sana").value;
    teht = document.getElementById("ul");
    teht.append(element);
    lista.push(lisattava);
    paivitalista ();
}
