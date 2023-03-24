class Cotizador {
    constructor(valormercado, efectivo) {
        this.valormercado = valormercado
        this.efectivo = efectivo
    }
    calcularPrecioEfectivo() {
        return (this.valormercado * efectivo).tofixed(2)
    }
}


