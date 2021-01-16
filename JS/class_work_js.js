function calculator(operator,operand1,operand2) {


    if (operator == "sum") {
        sum(operand1, operand2);

    } else if (operator == "mult") {
        mult(operand1, operand2);

    } else if (operator == "divis") {
        divis(operand1, operand2);

    } else if (operator == "sub") {
        sub(operand1, operand2);
    }


    return result;
}


function sum(a, b) {
    result = a + b;
}

function mult(a, b) {
    result = a * b;
}

function divis(a, b) {
    result = a / b;
}

function sub(a, b) {
    result = a - b;
}

alert(calculator("sum",10,2) + " это сумма")
alert(calculator("mult",10,2)+ " это умножение")
alert(calculator("divis",10,2)+ " это деление")
alert(calculator("sub",10,2)+ " это разница")
