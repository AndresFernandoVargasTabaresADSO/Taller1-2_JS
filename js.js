addEventListener("DOMContentLoaded",()=>{
    console.log(`23.
    • Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
    depósito.
    • Q=V/t, siendo Q (caudal), V (volumen) y t (tiempo).
    • Volumen = PI *(radio^2)* H (altura del depósito)
    • El tiempo se encuentra en minutos.
    • Normalmente se mide el volumen en litros y el tiempo en segundos.`)

    let diametro= Number(prompt(`Ingresa el diametro: `))
    let altura= Number(prompt(`Ingresa la altura: `))

    let di=  diametro/2
    let volumen= Math.PI * (Math.pow(di,2)* altura)
    let q= volumen/60
    
    console.log(`Tiempo estimado ${q}`)
})