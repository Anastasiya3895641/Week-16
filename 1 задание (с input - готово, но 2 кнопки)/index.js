
let sum = 0;
let numbers = [];
let sortNumbers = [];
const checkbtn = document.getElementById('checkbtn');
const errormessage = document.querySelector('.errormessage');
const input = document.querySelector('.array');
let result = document.getElementById('result');
let result2 = document.getElementById('result2');

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


function showResult() {


    sortNumbers = numbers.sort((a, b) => {
        return a - b;
    });

    console.log(sortNumbers)

    for (let i = 0; i < sortNumbers.length; i++) {
        sum += sortNumbers[i];
    }
    console.log(sum);

    document.getElementById('result').innerHTML = `Ваш отсортированный по возрастанию массив: ${sortNumbers}`;
    document.getElementById('result2').innerHTML = `Сумма элементов равна: ${sum}`;
}



console.log(result)



checkbtn.addEventListener('click', showResult);











