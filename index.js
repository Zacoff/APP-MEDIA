var form = document.getElementById('form');

var container = document.getElementById('container');

var el = document.getElementById('result');

var button = document.getElementById('button');

var ValorInput = []      

form.addEventListener('submit', (event) =>{
event.preventDefault();

let inputs = document.querySelectorAll('input'); 

armazenarValor(inputs);

let resultado = media(ValorInput).toFixed(2);

el.innerHTML = resultado;

resetarArray(ValorInput);

});
        
function armazenarValor(input) {
    for (i = 0; i < input.length; i++) {

    var inputValue = input[i].value;
    
    var value = inputValue === "" ? 0 : parseFloat(inputValue);

    var final = parseFloat(value.toFixed(2))
    
    ValorInput.push(final);

    }
} 

function media (array){
    var soma = 0;
    var a = 0;
    for (let index = 0; index < array.length; index++) {
        soma += array[index];
        a = soma / array.length;
    }
    return a;
}
function resetarArray(array){
    array.length = 0;
}

button.addEventListener('click',function() {
    let el = `<input type="text"/>`
    container.innerHTML += el
});