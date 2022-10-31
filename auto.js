const form = document.querySelector('.form');
const auction = document.querySelector('.auction');
const services = document.querySelectorAll('.inputServices');
const result = document.querySelector('.result');
const power = document.querySelector('.power');
const external1 = document.querySelector('.external1');
const external2 = document.querySelector('.external2');
const external3 = document.querySelector('.external3');


form.onsubmit = (evt) => {
    evt.preventDefault();
    let total;
    const status = auction.value;
    total = +status + Number(power.value);

    for (let i = 0; i < services.length; i++) {
        if (services[i].checked) {
            total = total + Number(services[i].value);
        }
    }

    if (power.value != '') {
        if (external1.checked) {
            external1.value = 1;
            total = total + Number(external1.value);
            console.log(total);
        }
        else {
            external1.value = 0;
        }
        if (external2.checked) {
            external2.value = 5;
            total = total + Number(external2.value);
        }
        else {
            external2.value = 0;
        }
        if (external3.checked) {
            external3.value = 2;
            total = total + Number(external3.value);
        }
        else {
            external3.value = 0;
        }
    }




    result.innerHTML = total;
};
