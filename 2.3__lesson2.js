var a = +prompt("Введите число a");
var b = +prompt("Введите число b");
if (a && b > 0 ){
    alert(a - b);
} else if (a && b < 0){
    alert(a * b);
} else if (a || b < 0){
    alert(a + b);
}