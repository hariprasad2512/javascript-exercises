const reverseString = function(word) {
    n = word.length;
    start = n - 1;
    reversedString = "";
    while (start >= 0){
        reversedString += word[start];
        start--;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
