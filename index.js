

let items = [];
let a = document.querySelector("input");
let sum = 0;

function sumInput() {


    for (i = 0; i <= items.length; i++) {
        items[i] = a[i].value;



        if (value === "/^[A-Za-z]+$/") break;

        items.push(+value);
    }

    for (let item of items) {
        sum += item;
    }
    return sum;
}


