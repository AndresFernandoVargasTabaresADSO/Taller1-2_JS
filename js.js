addEventListener("DOMContentLoaded",()=>{
    console.log(`20. Un vendedor recibe un sueldo base más el 10% de comisión sobre sus ventas. Si en un mes
    cualquiera hace tres ventas por valores: v1, v2 y v3, ¿cuánto recibirá por comisión? y ¿cuánto en total
    sueldo del vendedor?`)


    let sueldo= Number(prompt(`Ingresa tu sueldo base: `))
    let venta1= Number(prompt(`Ingresa el valor de la venta #1`))
    let venta2= Number(prompt(`Ingresa el valor de la venta #2`))
    let venta3= Number(prompt(`Ingresa el valor de la venta #3`))

    let solucion= (venta1 + venta2 +venta3)*0.10
    let total= (sueldo+solucion)

    console.log(`Tu comision es de: ${solucion}`)
    console.log(`Tu sueldo total es de: ${total}`)  
})