let languages = ['js', 'css', 'html'];

console.log(languages[0]);




let numbers = [0, 1, false, 2, undefined, '', 3, null];

console.log(numbers.filter(item => typeof item == "number" && item != "0"));




let index = [[1, 2], [1, 2, 3], [1, 2, 3, 4]];

for (let i = 0; i <= index.length; i++) {

    if (index[i].length > 3) {

        console.log(i);
    }
}


