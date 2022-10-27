
let items = [];
const check = document.querySelector('.check');
const errormessage = document.querySelector('.errormessage');
const input = document.querySelector('.input');
const result = document.querySelector('.result');
const result2 = document.querySelector('.result2');


input.addEventListener('change', () => {

    if (input.value !== '' && !/[^0-9\.]/g.test(input.value)) {
        items.push(Number(input.value));
        console.log(items)
        input.value = '';
    }
    else {
        errormessage.innerHTML = `Введите цифры`;
        input.value = '';
    }
});


check.addEventListener('', () => { });

for (let i = 0; i < items.length; i++) {
    items = input.value;
}



function sumInput() {

    let items = [];

    while (true) {
        if (number == '') break;
        items.push(+number);
    }

    items.sort();

    let sum = 0;

    for (let number of items) {
        sum = sum + number;
    }
    return sum;

}



result.innerHTML = `Получилось ${sum}`;
result2.innerHTML = `Размещены по возрастанию ${items.sort()}`;




