const firstBtn = document.getElementById('firstBtn');
const secondBtn = document.getElementById('secondBtn');

let sortedNum = [];
const numbers = [];
let sum = 0;

function sumInput() {

    while (true) {
        let num = prompt('Введите число и нажмите "Enter" для ввода следующего числа');

        if (num == +num && num !== '' && num !== null) {
            numbers.push(+num);
        } else {
            alert('Введено не числовое значение и/(или) ввод окончен');
            break;
        }
    }


    sortedNum = numbers.sort((a, b) => {
        return a - b;
    });


    for (let i = 0; i < sortedNum.length; i++) {
        sum += sortedNum[i];
    }
    return (sum);
};

function showResult() {
    document.getElementById('sortedNum').innerHTML = `Сортировка по возрастанию: ${sortedNum}`;
    document.getElementById('sumNum').innerHTML = `Сумма = ${sum}`;
};

firstBtn.addEventListener('click', sumInput);
secondBtn.addEventListener('click', showResult);














