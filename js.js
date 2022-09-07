addEventListener("DOMContentLoaded",()=>{
    console.log(`14. Una farmacia aplica al precio de los remedios el 10% de descuento, hacer un programa que
    ingresando el costo de los medicamentos calcules el descuento y el precio final.`)

    let producto= Number(prompt(`Ingrese el valor del medicamento: $ `))

    let descuento= (producto*0.10)
    let solucion= (producto-descuento)
    console.log(`El precio del medicamento es: $ ${producto}`)
    console.log(`Descuento del 10%: $ ${descuento}`)
    console.log(`El medicamento con el 10% de descuento es: $ ${solucion}`)
})