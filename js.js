addEventListener("DOMContentLoaded",()=>{
    console.log(`13. Realice un algoritmo que a partir de proporcionarle la velocidad de un automóvil expresada en
    kilómetros por hora, proporcione la velocidad en metros por segundos.`)

    let auto= Number(prompt(`Ingrese la velocidad del automovil`))

    let solucion=(auto*1000)/3600
    console.log(`La velocidad del automovil en metros por segundos es: ${solucion}`)
})