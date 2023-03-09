let shirts = 'smmsmmlllslslmmsmslslsm';

function sortTshirts(shirts) {
    let charArray = shirts.split('');

    charArray.sort().reverse();

    return charArray.join('');
}

console.log(sortTshirts(shirts));


