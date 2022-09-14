addEventListener("DOMContentLoaded",()=>{
    console.log(`21. Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la solución,
    por favor utilizar funciones matemáticas de Python para ello
    d = rc((x2-x1)^2 + (y2-y1)^2)`)


    let x1= Number(prompt(`Ingresa valor x1: `))
    let x2= Number(prompt(`Ingresa valor x2: `))
    let y1= Number(prompt(`Ingresa el valor y1: `))
    let y2= Number(prompt(`Ingresa el valor y2: `))

    let solucion= (((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)))

    console.log(`Valor de distancia: ${solucion}`)
})