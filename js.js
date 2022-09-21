addEventListener("DOMContentLoaded",()=>{
    console.log(`30. Ingrese una frase que lo identifique como programador de Software y luego mostar esta frase
    invertida.`)

    let frase =prompt("Introduce una frase: ")

    console.log(frase)

    const invertircadena = frase => frase.split("").reverse().join("");
    console.log(invertircadena(frase))
})