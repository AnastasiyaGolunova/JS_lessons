/**start:
    for (let i = 2; i <= 100; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue start;
        }

        console.log( i ); // простое
    }
*/


let i = 100;
let j = 2;
while (i-- >= 1){
    if (i % j === 0)
        continue;
    console.log(i);
}

