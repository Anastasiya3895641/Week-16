



let numbers = [];
let sortNumbers = [];
const btn = document.querySelector('.check');
const errormessage = document.querySelector('.errormessage');
const input = document.querySelector('.array');
const result = document.querySelector('.result');
const result2 = document.querySelector('.result2');



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
    console.log(numbers);


    btn.addEventListener('click', resCheck);

    function resCheck() {
        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            sum += +input.value;
        }


        result.innerHTML = `Получилось ${sum}`;

    }
}

function sumInput() {
}






/*function sumInput() {
    for (let i = 0; i < numbers.length; i++) {
        sortNumbers = sortNumbers + numbers[i] + ` `;
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
    console.log(numbers);



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




