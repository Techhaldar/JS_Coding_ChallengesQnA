function reverseNum () {
    const inputNumbers = document.querySelector('#inputNumbers').value;

    const arrayNum = inputNumbers.split(' ').map(Number);

    const reverse = minValue(arrayNum);

    document.querySelector('.result').innerText = `Reverse of number: ${reverse}`;
};
function minValue(value){
    let num = [0];
    if(value.length === 0){
        return 'No numbers provided';
    }
    return value.slice().reverse();
}
