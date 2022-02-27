const ftoc = function(f) {

    let result = ((f-32)*5)/9;

    return Math.round(10*result)/10;
};

const ctof = function(c) {

  let result = ((c*9)/5) + 32;

  return Math.round(10*result)/10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
