addEventListener("DOMContentLoaded",()=>{
    console.log(`22. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 2% de
    descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada producto y el total
    de la compra.`)

    let c1= Number(prompt(`Ingresa el valor de la compra 1: `))
    let c2= Number(prompt(`Ingresa el valor de la compra 2: `))
    let c3= Number(prompt(`Ingresa el valor de compra 3: `))
    let c4= Number(prompt(`Ingresa el valor de la compra 4: `))
    let c5= Number(prompt(`Ingresa el valor de la compra 5: `))

    let solucion= (c1+c2)*0.5 + (c3+c4)*0.20 + c5

    console.log(`El valor total es: ${solucion}`)
})