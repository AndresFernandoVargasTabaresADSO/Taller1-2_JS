addEventListener("DOMContentLoaded",()=>{
    console.log(`15. Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.`)

    let grados= Number(prompt(`Ingresa los grados centigrados: `))
    let solucion= (grados*1.8)+32

    console.log(`Grados en Fahrenheit: ${solucion} °F`)
})