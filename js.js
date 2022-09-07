addEventListener("DOMContentLoaded",()=>{
    console.log(`6. Escribir un programa que calcule la velocidad de un proyectil que recorre 2 Km en 5 minutos. 
    Expresar el resultado en metros/segundo. Velocidad = espacio/tiempo`)

    let distancia= Number(prompt(`Escribe la distancia que recorrio el proyectil: `))
    let tiempo= Number(prompt(`Escribe el tiempo que tardo el proyectil`))

    let dis= (distancia*1000)
    let temp= (tiempo*60)
    let velocidad= (dis*temp)
    
    console.log(`La velocidad del proyectil es: ${velocidad}ms`)
})