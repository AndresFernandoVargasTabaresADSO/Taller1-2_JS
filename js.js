addEventListener("DOMContentLoaded",()=>{
    console.log(`29. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo,
    pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron. Realice el código
    que representen el algoritmo para solucionar este problema.`)


    let n= String(prompt("Escribe tu nombre: "))
    let a= Number(prompt("Escribe el año actual: "))
    let c= String(prompt("Escribe tu año de nacimiento: "))

    let r=a-c

    console.log(`Hola Sr.${n}`)
    console.log(`Tu edad es: ${r}`)
})