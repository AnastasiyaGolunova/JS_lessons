var	arg1 = +prompt("Ведите число а"),
    arg2 = +prompt("Ведите число b"),
    operation = prompt("Ведите операцию");
    alert( mathOperation(arg1, arg2, operation));
function mathOperation(arg1, arg2, operation) {
    let result;
    switch (operation){
        case "+":
            result = arg1 + arg2;
            break;
        case "-":
            result = arg1 - arg2;
            break;
        case "*":
            result = arg1 * arg2;
            break;
        case "/":
            result = arg1 / arg2;
            break;
    }
    return result;
}

