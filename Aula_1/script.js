function appendToResult(value) {
    document.getElementById('result').value += value;
}
  
function calculateResult() {
    try {
      const result = eval(document.getElementById('result').value);
      document.getElementById('result').value = result;
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
}
  
function clearResult() {
    document.getElementById('result').value = '';
}
 
function checkParity() {
    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('parityResult');
  
    if (isNaN(numberInput)) {
      resultElement.textContent = 'Por favor, insira um valor numérico.';
      return;
    }
  
    const number = parseInt(numberInput);
  
    if (number % 2 === 0) {
      resultElement.textContent = `O número ${number} é par.`;
    } else {
      resultElement.textContent = `O número ${number} é ímpar.`;
    }
}
  
