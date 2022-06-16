class Display{
    constructor(displayValorAnterior, displayTotal){
        this.displayTotal = displayTotal;
        this.displayValorAnterior = displayValorAnterior;
        this.calculator = new Calculator();
        this.typeOperation = undefined;
        this.total = '';
        this.valorAnterior = '';
        this.signos = {
            suma: '+',
            restar: '-',
            dividir: '/',
            multiplicar: '*'
        }
    }
    //borrar un numero
    delete(){
        this.total = this.total.toString().slice(0,-1);
        this.addValor();
    }
    //borrar todo
    deleteAll(){
        this.total = '';
        this.valorAnterior = '';
        this.typeOperation = undefined;
        this.addValor();
    }
    //operadores
    computar(type){
        this.typeOperation !== 'igual' && this.calcular();
        this.typeOperation = type;
        this.valorAnterior = this.total || this.valorAnterior;
        this.total = '';
        this.addValor();
    }
    //agregar el .
    addNum(number){
        if(number === '.' && this.total.includes('.')) return
        this.total = this.total.toString() + number.toString();
        this.addValor();
    }
    //imprime valores
    addValor(){
        this.displayTotal.textContent = this.total;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.typeOperation] || ''}`;
    }

    //calcular
    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior)
        const total = parseFloat(this.total)

        if(isNaN(total) || isNaN(valorAnterior))return
        this.total = this.calculator[this.typeOperation](valorAnterior, total);
    }
}