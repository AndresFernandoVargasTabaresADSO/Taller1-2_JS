addEventListener("DOMContentLoaded",()=>{
    console.log(`24. Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. Después de pagar le sobran $91000. ¿cuánto dinero tenía?`)

    var juegos=11500*5
    var bomba=1168000
    var pernos=87000*3
    var sobran= 91000

    let suma=(juegos+bomba+pernos+sobran)

    console.log(`El dinero que Tenia en total es ${suma}`)
})