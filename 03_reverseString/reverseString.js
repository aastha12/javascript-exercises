const reverseString = function(str) {

    let stringArray = Array.from(str);
    let result='';

    for(let i=stringArray.length-1;i>=0;i--)
    {
        result=result.concat(stringArray[i]);
    }
    return result;

};

// Do not edit below this line
module.exports = reverseString;
