var form = document.getElementById('form');

var container = document.getElementById('container');

var el = document.getElementById('result');

var button = document.getElementById('button');

var ValorInput = []      

form.addEventListener('submit', (event) =>{
event.preventDefault();

let inputs = document.querySelectorAll('input'); 

armazenarValor(inputs);

vereficarEAddResultado (ValorInput,el)

resetarArray(ValorInput);

});
        
function armazenarValor(input) {
    for (i = 0; i < input.length; i++) {

    let inputValue = input[i].value;

    let replaceValue = inputValue.replace(',','.');

    let value;
    
    if (isNumber(replaceValue) === true || replaceValue === '') {
        var final = inputValue === "" ? 0 : parseFloat(replaceValue);
        
        value = final;
    }else{
        value = 'ERROR'
    }
    ValorInput.push(value);
    }
} 
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function calcularMedia (array){
    var soma = 0;
    var a = 0;
    for (let index = 0; index < array.length; index++) {
        soma += array[index];
        a = soma / array.length;
    }
    return a;
}
function vereficarEAddResultado (array,el) {
    let resultado = calcularMedia(array).toFixed(2);
    console.log(resultado);
    if (resultado === 'NaN'){
    resultado = `ERRO DE DIGITAÇÃO`
    }
    return el.innerHTML = resultado;
}
function resetarArray(array){
    array.length = 0;
}

button.addEventListener('click',function() {
    let el = `<input type="text"/>`
    container.innerHTML += el
});