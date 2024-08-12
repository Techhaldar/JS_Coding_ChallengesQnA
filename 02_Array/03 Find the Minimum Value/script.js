function minNum () {
    const inputNumbers = document.querySelector('#inputNumbers').value;
    // const result = document.querySelector('.result');

    const arrayNum = inputNumbers.split(' ').map(Number);

    const min = minValue(arrayNum);

    document.querySelector('.result').innerText = `Out of ${inputNumbers} smallest number is: ${min}`;
};
function minValue(value){
    let num = [0];
    if(value.length === 0){
        return 'No numbers provided';
    }
    return Math.min(...value);
}