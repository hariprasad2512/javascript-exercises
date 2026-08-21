const removeFromArray = function(arr, ...args) {
    // let resultArray = [];
    
    // arr.forEach(element => {
    //     if(!args.includes(element)){
    //         resultArray.push(element);
    //     }
    // });
    // return resultArray;

    // ALITER
    return arr.filter(num => !args.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
