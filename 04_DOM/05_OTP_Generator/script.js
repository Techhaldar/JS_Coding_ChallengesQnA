function OTP () {
    let count = ""
    for(let i = 0; i<4; i++){
        const num = Math.floor(Math.random() * 10)
        count = count + num;
    }
    return count;
}

console.log(OTP())