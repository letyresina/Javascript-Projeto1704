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

function calc(){
    let n1 = Number(prompt("Digite o primeiro valor"))
    let n2 = Number(prompt("Digite o segundo valor"))
    let opcao = Number(prompt(`Dados Informados ${n1} e ${n2} \n Escolha uma opção: \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão`))

    switch(opcao){
        case 1:
            msg.innerHTML += `<p>${n1} + ${n2} = ${n1 + n2}</p>`
            break;
        case 2:
            msg.innerHTML += `<p>${n1} - ${n2} = ${n1 - n2}</p>`
            break;
        case 3:
            msg.innerHTML += `<p>${n1} * ${n2} = ${n1 * n2}</p>`
            break;
        case 4:
            msg.innerHTML += `<p>${n1} / ${n2} = ${n1 / n2}</p>`
            break; 
        case 5:
            msg.innerHTML += `Opção inválida`
            break;
    }
}