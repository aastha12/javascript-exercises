const removeFromArray = 
/*
function(array,val) {

    let result = array.filter(
function(item)
{
    return item!=val;
}
    );

    return result;

};
*/

function(array,val)
{
    let valArray; //contains elements to be removed
    let resultArray;

    if(arguments.length>=2)
    {
        valArray=Array.from(arguments).slice(1);
    }
    else if(arguments.length<2)
    {
        return 'ERROR';
    }

    let indices=[];
    
    for(const item of valArray)
    {
        indices.push(array.indexOf(item));
    }

    indices.sort();

    for(let i=indices.length-1;i>=0;i--)
    {
        if(indices[i]==-1) continue; //ignores non present values
        array.splice(indices[i],1); //will delete the element
    }

    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
