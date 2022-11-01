
let sum = 0;
let numbers = [];
let sortNumbers = [];
const checkbtn = document.getElementById('checkbtn');
const checkbtn2 = document.getElementById('checkbtn2');
const errormessage = document.querySelector('.errormessage');
const input = document.querySelector('.array');
const result = document.getElementById('result');
const result2 = document.getElementById('result2');

document.getElementById('result').innerHTML = 'Здесь будет отсортированный по возрастанию массив';
document.getElementById('result2').innerHTML = 'Здесь будет сумма элементов массива';


input.addEventListener('change', () => {

    errormessage.innerHTML = ``;

    if (input.value !== '' && !/[^0-9\.]/g.test(input.value)) {

        numbers.push(+(input.value));
        input.value = '';
    }
    else {
        errormessage.innerHTML = `Введите цифры`;
        input.value = '';
    }
});


function sumInput() {

    sortNumbers = numbers.sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i < sortNumbers.length; i++) {
        sum += sortNumbers[i];
    }
    // console.log(sum);
    return (sum);


};

function showResult() {
    document.getElementById('result').innerHTML = `Ваш отсортированный по возрастанию массив: ${sortNumbers}`;
    document.getElementById('result2').innerHTML = `Сумма элементов равна: ${sum}`;
}

checkbtn2.addEventListener('click', sumInput);
checkbtn.addEventListener('click', showResult);











