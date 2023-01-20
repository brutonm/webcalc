let firstNumber = 0;
let operation = '';
let overideSwitch = false;




const numberClick = (numberValue) => {
    if (overideSwitch) {
        document.getElementById('numberOutput').value = numberValue;
        overideSwitch = false;
    } else {
        const whatTheNumberIs = document.getElementById('numberOutput').value;
        if (whatTheNumberIs === '0') {
            document.getElementById('numberOutput').value = numberValue; 
        } else {
            document.getElementById('numberOutput').value += numberValue; 
        }
    }
};


document.addEventListener('DOMContentLoaded', e => {
	document.getElementById('numberOutput').value = '0';
});

const acClick = () => {
    document.getElementById('numberOutput').value = '0';
    firstNumber = 0;
    operation = '';
    overideSwitch = false;
};

const doAddition = () => {
    firstNumber = Number(document.getElementById('numberOutput').value);
    operation = 'plus';
    overideSwitch = true;
};

const doMinus = () => {
    firstNumber = Number(document.getElementById('numberOutput').value);
    operation = 'minus';
    overideSwitch = true;
};

const doMultiply = () => {
    firstNumber = Number(document.getElementById('numberOutput').value);
    operation = 'times';
    overideSwitch = true;
};

const doDivide = () => {
    firstNumber = Number(document.getElementById('numberOutput').value);
    operation = 'divide';
    overideSwitch = true;
};

const decimalClick = () => {
    if (overideSwitch){
        document.getElementById('numberOutput').value = '0.';
        overideSwitch = false;
    } else {
        const currentValue = document.getElementById('numberOutput').value;
        if (currentValue.length < 16 && !currentValue.includes('.')) {
            document.getElementById('numberOutput').value += '.';
        }
    }
};

const doEquals = () => {
    const secondNumber = Number(document.getElementById('numberOutput').value);
    let result = 0;
    if (operation === 'plus') {
        result = firstNumber + secondNumber;
    } else if (operation === 'minus'){
        result = firstNumber - secondNumber;
    } else if (operation === 'times') {
        result = firstNumber * secondNumber;
    } else if (operation === 'divide') {
        result = firstNumber / secondNumber;
    }
    document.getElementById('numberOutput').value = result;
    firstNumber = result;
    overideSwitch = true;
};