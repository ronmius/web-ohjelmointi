console.log("keskustelaan")
function hello (){
    alert("hello World!")
}
function send (e){
    e.preventDefault();
    typefield =  e.target.form.fav_language.value
    usagefield = e.target.form.usage.value
    emailField = e.target.form.emailField.value
    birthdayField = e.target.form.birthdayField.value
    bodyField = e.target.form.bodyField.value
    console.log(birthdayField,emailField,typefield,usagefield,bodyField)
    
    const diolg =document.getElementById("lisaa")
    diolg.close();
}
