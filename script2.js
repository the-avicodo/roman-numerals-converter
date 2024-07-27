const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const rncForm = document.getElementById('rnc-form');
const output = document.getElementById('output');

const romanArray = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
const arabicArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value)
  if (numberInput.value === '') {
    output.textContent = "Please enter a valid number";
    return;
  } else if (inputInt < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  } else if (inputInt > 3999) {
 output.textContent = "Please enter a number less than or equal to 3999";
  return;
  } else {
  output.textContent = `${numberInput.value} = ${convertToRoman(parseInt(numberInput.value))}`;
  numberInput.value = '';
  }
}

const convertToRoman = (input) => {
  let romanNumeral = '';
  let i = 0;
  while (i < romanArray.length || input !== 0) {
    if (input >= arabicArray[i]) {
      romanNumeral += romanArray[i] === 'M' || 'C' || 'X' || 'I' ? romanArray[i].repeat(Math.floor(input/arabicArray[i])) : romanArray[i];
      input = input % arabicArray[i];
    }
    i++
  }

  return romanNumeral;
}


rncForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  checkUserInput();
});