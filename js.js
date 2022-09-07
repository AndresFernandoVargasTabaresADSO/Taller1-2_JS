addEventListener("DOMContentLoaded",()=>{
    console.log(`17. Dado el valor que un cliente paga por un producto, calcular qué valor corresponde al costo total del
    producto y cuánto es el valor del IVA. Considerando que el porcentaje del IVA puede variar en el
    tiempo y de un producto a otro, este dato se lee por teclado`)

    let iva= Number(prompt(`Valor del iva actual: `))
    let producto= Number(prompt(`Ingresa el valor del producto`))

    let precioIva= ((producto * iva)/100)
    let precioProducto= (precioIva + producto)

    console.log(`El valor del iva es: $ ${precioIva}`)
    console.log(`El precio del producto con el ${iva}% es: $ ${precioProducto}`)


})