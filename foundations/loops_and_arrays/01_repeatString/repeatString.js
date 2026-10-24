const repeatString = function(userString, repeatNumber) {
    if (repeatNumber < 0) return 'ERROR';
    let outputString = '';
    for (let i = 0; i < repeatNumber; i++){
        outputString += userString;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
