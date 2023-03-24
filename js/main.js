function buscarPisos(codigo) {
    let resultado = pisos.find(pisos => pisos.codigo === codigo)
    return resultado
}

function cotizarPiso() {
    const codigoElegido = parseInt(prompt(primerMensaje))
    let seleccionado = buscarPisos(codigoElegido)
        if (seleccionado === undefined) {
            alert("Codigo desconocido, por favor elija uno correcto")
            return
        }else{
            M2 = parseInt(prompt("Ingresa los metros2 de la superficie que desea cubrir"))
                if (M2 !== NaN && M2 >= 1 && M2 <= 3000){
                    medioDePago = parseInt (prompt(segundoMensaje))
                    if (medioDePago !== 1 && medioDePago !== 2){
                        alert ("Ingresa un dato válido, por favor")
                    }
                    if (medioDePago == 1){
                        let mensaje = `Haz seleccionado: ${seleccionado.tipo}'. Valor del mercado: $ ${seleccionado.valor * efectivo * M2}`
                        alert(mensaje)
                    }
                    else{
                        let mensaje = `Haz seleccionado: ${seleccionado.tipo}'. Valor del mercado: $ ${seleccionado.valor * M2}`
                        alert(mensaje)
                    }
                }

        }
        
}