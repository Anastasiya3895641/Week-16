

let items = [];
let a = document.querySelector("input");
let sum = 0;
errorMessage.innerHTML = "";
result.innerHTML = "";
result2.innerHTML = "";

function sumInput() {


    for (i = 0; i <= items.length; i++) {
        items[i] = a[i].value;

        document.querySelector('input').addEventListener('keydown', function (e) {
            if (e.keyCode === 13) {

                console.log(this.value);
            }
        }


            if (value === "/^[A-Za-z]+$/") {
            errorMessage.innerHTML =
                `Вы вставили букву(-ы)<br>`;
            break;
        }
        items.push(+value);
    }


    for (let item of items) {
        sum += item;
    }
    return sum;
}

document.querySelector('errorMassage').innerHTML = html;
document.querySelector('result').innerHTML = html;




