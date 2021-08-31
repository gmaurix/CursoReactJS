let c= console.log

/* ----------------------------- Spread operator ---------------------------- */
let arr =[1,2,4,5]
c([... arr])

/* ----------------------- desestructuracion de Objet ----------------------- */
let {a}={a:2,b:3}
c(a)

const andre={
    nombre:"maria andrea",
    edad:33

}
let {nombre:nom, edad}=andre
c(nom, edad)
c(andre)

