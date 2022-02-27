const repeatString = function(str,num) {

    let i=num;
    let result=str;

    if(num<0)
    {
        return 'ERROR';
    }

    else if (num==0)
    {
        return '';
    }

    while(i>1) 
    {
        result = result.concat(str); 
        i--; 
    }

    return result;

};

// Do not edit below this line
module.exports = repeatString;
