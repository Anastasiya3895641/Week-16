
let array = [];
const check = document.querySelector('.check');
const errormessage = document.querySelector('.errormessage');
const input = document.querySelector('.array');
const result = document.querySelector('.result');
const result2 = document.querySelector('.result2');


input.addEventListener('change', () => {

    errormessage.innerHTML = ``;

    if (input.value !== '' && !/[^0-9\.]/g.test(input.value)) {
        array.push(Number(input.value));
        input.value = '';
    }
    else {
        errormessage.innerHTML = `Введите цифры`;
        input.value = '';
    }
});


check.addEventListener('', () => {
    result.innerHTML = ``;
});

for (let i = 0; i < input.length; i++) {
    sum += input[i];
}



function sumInput() {

    let array = [];

    while (true) {
        if (number == '') break;
        array.push(+number);
    }

    array.sort();

    let sum = 0;

    for (let number of array) {
        sum += number;
    }

    console.log(array[0]);
    check.innerHTML = `Получилось ${sum}`;
}








