const getLonguestZeroSequenceLength = (number) => {
    const binary = decimalToBinary(number);
    let max = 0;
    let currentCount = 0;

    for (let i = 0 ; i < binary.length ; i++){
        if (binary[i] === '1') {
            if (currentCount > max) {
                max = currentCount;
            }
            currentCount = 0;

        } else if (binary[i] === '0'){
            currentCount ++;
        }
    }

    return max > currentCount ? max : currentCount;
}

const decimalToBinary = (number) => {
    let binary = "";
    let currentNumber = number;

    while (currentNumber > 0 ){
        binary =  (currentNumber%2) + binary;
        currentNumber = Math.floor(currentNumber/2);
    }

    return binary;
}


module.exports = getLonguestZeroSequenceLength;