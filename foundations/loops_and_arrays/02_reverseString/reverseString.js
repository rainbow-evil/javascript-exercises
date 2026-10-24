const reverseString = function(string) {
    let reversedString = '';
    let splitString = string.split('');
    splitString.reverse();
    for (let i = 0; i < splitString.length; i++){
        reversedString += splitString[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
