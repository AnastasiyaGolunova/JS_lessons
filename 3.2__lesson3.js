/** var numbers = [];

while (true) {

    var value = prompt("Введите число", 0);

    if (value === "" || value === null || isNaN(value)) break;

    numbers.push(+value);
}

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

alert( sum );
 */
let baskets = [ {"item" : "apple", "price" : 25},
    {"item" : "peach", "price" : 35},
    {"item" : "mango", "price" : 15}
]
let money = 0;
function countBasketPrice (x){
    for (let n in baskets) {
        let basket = baskets[n];
        money += basket['price'];
    }
    return money;
}

console.log(countBasketPrice(baskets));
