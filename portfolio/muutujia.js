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