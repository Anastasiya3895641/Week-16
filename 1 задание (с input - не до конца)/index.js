

let numbers = [];
let sortNumbers = [];
const button = document.getElementById('checkbtn');
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

    let sum = 0;


    sortNumbers = numbers.sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i < sortNumbers.length; i++) {
        sum += sortNumbers[i];
    }
    // console.log(sum);
    return (sum);


};

document.getElementById('result').innerHTML = `Ваш отсортированный по возрастанию массив: ${sortNumbers}`;
document.getElementById('result2').innerHTML = `Сумма элементов равна: ${sum}`;

checkbtn.addEventListener('click', sumInput);



/*function sumInput() {
    for (let i = 0; i < numbers.length; i++) {
        sortNumbers = sortNumbers + numbers[i] + ` `;
    }

}

console.log(numbers);


    btn.addEventListener('click', resCheck);

    function resCheck() {
        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            sum += +input.value;
        }


        result.innerHTML = `Получилось ${sum}`;

    }


check.addEventListener('click', function () {
    for (let i = 0; i < numbers.length; i++) {
        sum += array[i];
    }
    return sum
});


*let numbers = [];
let sum = 0
for (let number of numbers) {
    sum += number;
}
return sum
 

/*function sumInput() {



    numbers.sort();
    console.log(numbers);



        numbers.sort(function (a, b) {
            return a - b;
        });
} */

/*check.addEventListener('click', () => {
 
    result.innerHTML = ``;
 
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        result.innerHTML = `Получилось ${sum}`;
    }
 
 
});
 
 
}
*/

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
 
*/









