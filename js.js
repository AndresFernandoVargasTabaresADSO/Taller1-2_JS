addEventListener("DOMContentLoaded",()=>{
    console.log(`28. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura. Considere que
    se cobra por m2 y realice el código que representen el algoritmo que le permita ir generando
    presupuestos para cada cliente.`)


    let m= Number(prompt("Escribe los metros cuadrados a pintar"))
    let p= Number(prompt("Escribe el precio del metro cuadrado"))

    let mult=m*p

    console.log(`el valor es: ${mult}`)
})