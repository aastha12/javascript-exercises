const sumAll = function(a,b) {

    let result=0;
    if(a<0 || b<0 || typeof a!='number' || typeof b!='number')
    {
        return 'ERROR';
    }

    if(a<b)
    {
    for(let i=a;i<=b;i++)
    {
        result+=i;
    }
    }

    else if(b<a)
    {
        for(let i=b;i<=a;i++)
        {
            result+=i;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
