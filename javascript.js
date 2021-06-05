
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
