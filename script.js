const body = document.body;
const bigbody = document.createElement('div');
const firstTable = document.createElement('div');
var selecaoTip = 0;
body.appendChild(bigbody);
bigbody.appendChild(firstTable);

  const createTitle = () => {
    bigbody.id = 'bodyTable';
    firstTable.id = 'firstTable';
    const title = document.createElement('h2');
    title.innerHTML = 'Bill';
    title.id = 'bill';
    firstTable.appendChild(title);
  }

  const inputTip = () => {
    const input = document.createElement('input');
    input.type = 'number';
    input.name = 'billTotal';
    input.id = 'billTotal';
    input.min = 0;
    input.value = 0;
    firstTable.append(input);
}

  const createTitleSelect = () => {
    const title = document.createElement('h2');
    title.innerHTML = 'Select Tip %';
    title.id = 'select-type';
    firstTable.appendChild(title);
}

function valueButton(event) {
  selecaoTip = parseInt(event)/100;
}

  const selectTypeButtonsInput = () => {
    const arrbuttons = ['5%', '10%', '15%', '25%', '50%'];
    const divButton = document.createElement('div');
    divButton.id = 'divButton';
    arrbuttons.forEach((numberButton) => {
    const button = document.createElement('button');
    button.className = ('buttontip')
    button.innerHTML = numberButton;
    button.value = parseInt(numberButton)
    button.onclick = () => valueButton(button.value)
    divButton.appendChild(button); 
    firstTable.appendChild(divButton);
  });

    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'buttontip';
    input.id = 'inputTip';
    input.max = 100;
    input.min = 0;
    input.placeholder = 'Custom';
    divButton.appendChild(input)
    firstTable.appendChild(divButton);
};

  const numberOfPeople = () => {
    const title = document.createElement('h2');
    title.innerHTML = 'Number of People';
    firstTable.appendChild(title);
    const input = document.createElement('input');
    input.type = 'number';
    input.id = 'people';
    input.name = 'people';
    input.min = 0;
    input.max = 100;
    input.value = 0;
    firstTable.append(input);
};

  const  resultTable = () => {
    const divTable = document.createElement('div');
    divTable.id = 'secondTable';
    const resultTipAmount = document.createElement('h2');
    resultTipAmount.innerHTML = 'Tip Amount /person';
    bigbody.append(divTable);
    divTable.appendChild(resultTipAmount);
    const resultAmount = document.createElement('div');
    resultAmount.id = 'amountPerson';
    resultAmount.innerHTML = '$ 0.00';
    resultTipAmount.appendChild(resultAmount);
    const totalTip = document.createElement('h2');
    totalTip.innerHTML = 'Total /person';
    divTable.appendChild(totalTip);
    const resultTip = document.createElement('div');
    resultTip.id = 'resultTip';
    resultTip.innerHTML = '$ 0.00';
    totalTip.appendChild(resultTip);
    const calculateButton = document.createElement('button');
    calculateButton.innerHTML = 'CALCULATE';
    calculateButton.id = 'calculateButton';
    calculateButton.onclick = () => { submitResult() };
    divTable.appendChild(calculateButton);
    const resetButton = document.createElement('button');
    resetButton.innerHTML = 'RESET';
    resetButton.id = 'buttonReset';
    resetButton.onclick = () => { submitReset() }
    divTable.appendChild(resetButton);
};

  const submitResult = () => {
    const people = document.getElementById('people');
    const resultAmount = document.getElementById('amountPerson');
    const resultTip = document.getElementById('resultTip');
    const tip = document.getElementById('billTotal');
    const custom = document.getElementById('inputTip');
    if (custom.value > 0 && parseInt(tip.value) > 0 && parseInt(people.value) > 0) {
        resultAmount.innerHTML = `$ ${ (( tip.value * (custom.value/100))/people.value ).toFixed(2) }`;
        resultTip.innerHTML = `$ ${ (((parseFloat(tip.value) * (custom.value/100)) + parseFloat(tip.value))/people.value).toFixed(2) }`;
    } else if (selecaoTip > 0 && parseInt(tip.value) > 0 && parseInt(people.value) > 0) {
      resultAmount.innerHTML = `$ ${ ((tip.value * selecaoTip)/people.value).toFixed(2) }`;
      resultTip.innerHTML = `$ ${ (((parseFloat(tip.value) * selecaoTip) + parseFloat(tip.value))/people.value).toFixed(2)}`;
    }
};

 const submitReset = () => {
  const people = document.getElementById('people');
  people.value = 0;
  const resultAmount = document.getElementById('amountPerson');
  resultAmount.innerHTML = '$ 0.00';
  const resultTip = document.getElementById('resultTip');
  resultTip.innerHTML = '$ 0.00';
  const bill = document.getElementById('billTotal');
  bill.value = 0;
};

window.onload = () => {
createTitle();
inputTip();
createTitleSelect();
selectTypeButtonsInput();
numberOfPeople();
resultTable();
};
