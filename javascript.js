


// Esta função controla a mudança de estilos definidos da sidebar, para adicionar o efeito de selecionado
// é uma função simples mas que me ajudou bastante a entender como o javascript funciona


function noclick(event){
    var clicado = event.target
    
    document.querySelectorAll(".sidebar a").forEach( (a) => {
        a.classList.remove("active")
    })
    clicado.classList.toggle("active")
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelectorAll(".sidebar a").forEach( (a) => {
        a.addEventListener("click", noclick)
    });

    console.log(document.querySelectorAll(".sidebar a"))
})
