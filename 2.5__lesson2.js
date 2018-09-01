var	a = +prompt("Ведите число а"),
    b = +prompt("Ведите число b"),
    operator = prompt("Ведите операцию"),
    result;

if(operator == "+"){
    result = a+b;
//  return a+b;
} else if(operator == "-") {
    result = a-b;
} else if(operator == "/") {
    result = a/b;
} else if(operator == "*") {
    result = a*b;
}

//var result = cal (a, b, operator);
alert("Результат: " + result);