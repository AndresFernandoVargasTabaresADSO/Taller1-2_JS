addEventListener("DOMContentLoaded",()=>{
    console.log(`12. Programa que muestre el pago de una llamada telefónica sabiendo que cada minuto cuesta $355 
    pesos y un IVA de 20%.`)

    let temp= Number(prompt(`Ingrese los minutos que duro la llamada: `))

    let precio= 355
    let iva= (precio*0.20)
    let solucion= (precio * temp)+iva
    let solucion2= (precio * temp)
    console.log(`Total sin iva: ${solucion2}`)
    console.log(`Total mas 20% de iva ${solucion}`)
})