const removeFromArray = function(array) {
    //let newArray = [];
    for (let i = 0; i < arguments.length; i++){
        array = array.filter(item => item !== arguments[i])
    }
    return array
};

// Do not edit below this line 1234 - 32
module.exports = removeFromArray;
