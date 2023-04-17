function validar(){
    let usuario = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value
    
    if(usuario == "" && senha == ""){
        alert("Preencha todos os campos para prosseguir.")
    }else if(usuario == "" || senha == ""){
        alert("Preencha todos os campos para prosseguir.")
    }else{
        alert("Acesso permitido.")
        window.open("menu.html")
    }
}