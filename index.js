const numberClick = (numberValue) => {
    const whatTheNumberIs = document.getElementById('numberOutput').value;
    if (whatTheNumberIs === '0') {
        document.getElementById('numberOutput').value = numberValue; 
    } else {
        document.getElementById('numberOutput').value += numberValue; 
    }
};


document.addEventListener('DOMContentLoaded', e => {
	document.getElementById('numberOutput').value = '0';
});

const acClick = () => {
    document.getElementById('numberOutput').value = '0';
};

