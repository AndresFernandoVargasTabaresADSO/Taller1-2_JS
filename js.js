addEventListener("DOMContentLoaded",()=>{
    console.log(`16. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. Dicha calificación se
    compone de los siguientes porcentajes:
    • 55% del promedio final de sus calificaciones de los tres(3) parciales.
    • 30% de la calificación examen final y
    • 15% de la calificación trabajo final.
    `)

    let parcial1= Number(prompt(`Ingresa tu parcial #1`))
    let parcial2= Number(prompt(`Ingresa tu parcial #2`))
    let parcial3= Number(prompt(`Ingresa tu parcial #3`))
    let calificacionEx= Number(prompt(`Ingresa tu calificacion del examen final: `))
    let trabajoFinal= Number(prompt(`Ingresa tu calificacion del trabajo final: `))

    let promParciales= (parcial1 + parcial2 + parcial3)/3
    let promedioParciales= (promParciales*0.55)
    let examenFinal=(calificacionEx*0.30)
    let trabFinal=(trabajoFinal*0.15)
    let notaFinal=(promedioParciales+examenFinal+trabFinal)


    console.log(`Tu promedio de los 3 parciales es: ${promedioParciales}`)
    console.log(`Tu promedio del examen final es: ${examenFinal}`)
    console.log(`Tu promedio del trabajo final es: ${trabFinal}`)
    console.log(`Tu nota final en la material de algoritmos es: ${notaFinal}`)


})