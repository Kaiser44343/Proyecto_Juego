//Menú

const cont = document.getElementById("continue")
//Cambiar los document.body.style.(relacionar el div que toque en cada caso).zindex
cont.addEventListener("click", ()=>{
    document.body.style.zindex = 0;
    document.body.style.zindex = 1;
})
const nuevo = document.getElementById("NewG")

nuevo.addEventListener("click", ()=>{
    document.body.style.zindex = 0;
    document.body.style.zindex = 1;
})
const opt = document.getElementById("Opts")

opt.addEventListener("click", ()=>{
    document.body.style.zindex = 0;
    document.body.style.zindex = 1;
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

const Soldado = document.getElementById("")
Soldado.addEventListener("click", ()=>{
    personaje.clase = "Soldado"
})

const Asesino = document.getElementById("")
Asesino.addEventListener("click", ()=>{
    personaje.clase = "Asesino"
})

const Mago = document.getElementById("")
Mago.addEventListener("click", ()=>{
    personaje.clase = "Mago"
})


switch(true){
    case personaje.arma == "Soldado":
        personaje.arma = "Espada"
        personaje.daño = 50;
        personaje.defensa = 20
        break;
    case personaje.clase == "Asesino":
        personaje.arma = "Daga"
        personaje.daño = 20;
        personaje.nturnos = 2;
        personaje.vida = 70;
        break;
    case personaje.arma == "Mago":
        personaje.arma = "Baston"
        personaje.daño = 70;
        personaje.defensa = -10;
        personaje.vida = 60;
        break;
}


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