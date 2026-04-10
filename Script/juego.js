//Menú

const nuevo = document.getElementById("NewG")
const seleccion = document.getElementById("seleccion_personaje")

nuevo.addEventListener("click", ()=>{
    seleccion.style.display="flex";
})

const salir = document.getElementById("Exit")
salir.addEventListener("click", ()=>{
    window.close()
})

//Clases

let personaje = {
    usuario: "",
    clase: "",
    vida: 100,
    arma: "",
    defensa: 0,
    escudo: false,
    nturnos: 1,
    daño: 20
}

const Soldado = document.getElementById("clase_soldado")
Soldado.addEventListener("click", ()=>{
    personaje.clase = "Soldado"
    personaje.arma = "Espada"
    personaje.daño = 50;
    personaje.defensa = 20
})

const Asesino = document.getElementById("clase_asesino")
Asesino.addEventListener("click", ()=>{
    personaje.clase = "Asesino"
     personaje.arma = "Daga"
    personaje.daño = 20;
    personaje.nturnos = 2;
    personaje.vida = 70;
})

const Mago = document.getElementById("clase_mago")
Mago.addEventListener("click", ()=>{
    personaje.clase = "Mago"
    personaje.arma = "Baston"
    personaje.daño = 70;
    personaje.defensa = -10;
    personaje.vida = 60;
})

const empezar = document.querySelectorAll(".btn_seleccionar")
empezar.forEach(boton => {
    boton.addEventListener("click", ()=>{
        window.location.href = "pages/game_screen.html";

})})

const volver = document.getElementById("btn_cancelar")
volver.addEventListener("click", ()=>{
    seleccion.style.display="none";
})



//Codigo para usar mas adelante
for (i=1;i<=personaje.nturnos;i++){

}

const ataque = document.getElementById("")
ataque.addEventListener("click", ()=>{

})


const cura = document.getElementById("")
cura.addEventListener("click", ()=>{

})

    
const huida = document.getElementById("")
huida.addEventListener("click", ()=>{
    
})
