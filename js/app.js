function operate(operationType) {
    const form = document.getElementById('form');
    let operatorA = form['firstnumber'];
    let operatorB = form['secondnumber'];
    let result = 0;
    switch (operationType) {
        case 'add':
            result = parseFloat(operatorA.value) + parseFloat(operatorB.value);
            break;
        case 'substract':
            result = parseFloat(operatorA.value) - parseFloat(operatorB.value);
            break;
        case 'multiply':
            result = parseFloat(operatorA.value) * parseFloat(operatorB.value);
            break;
        case 'divide':
            result = parseFloat(operatorA.value) / parseFloat(operatorB.value);
            break;
    }
    if (isNaN(result)) {
        document.getElementById('result').innerHTML = `The operator not have numbers`;
    } else {
        document.getElementById('result').innerHTML = `The result is: ${result.toFixed(3)}`;
    }
};