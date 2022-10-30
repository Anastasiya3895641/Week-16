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




/*function sumInput() {
    for (let i = 0; i < numbers.length; i++) {
        sortNumbers = sortNumbers + numbers[i] + ` `;
    }
 
}
 
 btn.addEventListener('click', resCheck);
 
    function resCheck() {
 
 
        for (let i = 0; i < numbers.length; i++) {
            sum += +input.value;
        }
 
 
        result.innerHTML = `Получилось ${sum}`;
 
    }
}
 
 
 
 
check.addEventListener('click', function () {
    for (let i = 0; i < numbers.length; i++) {
        sum += array[i];
    }
    return sum
});
 
 
    while (true) {
        let value = prompt("Введите число");
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
 
 
 
 
 
/*function sumInput() {
 
 
 
    numbers.sort();
    
 
 
 
        numbers.sort(function (a, b) {
            return a - b;
        });
        sumInput(numbers);
 
 
 
 
 
 
    numbers = numbers.sort();
    for (let i = 0; i < numbers.length; i++) {
        sortNumbers = sortNumbers + numbers[i] + ` `;
    }
    document.getElementById('result2').innerHTML = `Массив отсортирован по возрастанию:  ` + sortNumbers;*/



/*let numbers = [];
let sum = 0
for (let number of numbers) {
    sum += number;
}
return sum
 
 
 
 
 
 
 
 
/*check.addEventListener('click', () => {
 
    result.innerHTML = ``;
 
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        result.innerHTML = `Получилось ${sum}`;
    }
 
 
});
 
 
 
 
 
 
 
 
array.sort();
 
let sum = 0;
 
for (let number of array) {
    sum += number;
}
 
 
}
sumInput()
document.getElementById('result2').innerHTML = `Получилось ${sumInput()}`;*/