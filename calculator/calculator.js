let displayValue = '';

function appendNumber(number) {
   displayValue += number;
   updateDisplay();
}

function operate(operator) {
   if (displayValue !== '') {
      if (displayValue.endsWith(operator)) {
         // Replace the previous operator if the user enters multiple operators consecutively
         displayValue = displayValue.slice(0, -1) + operator;
      } else {
         displayValue += operator;
      }
      updateDisplay();
   }
}

function calculate() {
   if (displayValue !== '') {
      let result;
      try {
         result = eval(displayValue);
         displayValue = result.toString();
      } catch (error) {
         displayValue = 'Error';
      }
      updateDisplay();
   }
}

function clearDisplay() {
   displayValue = '';
   updateDisplay();
}

function updateDisplay() {
   document.getElementById('result').value = displayValue;
}
