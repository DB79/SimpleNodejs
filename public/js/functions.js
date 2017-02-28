function addNumbers(num1, num2) {
    let val1 = parseFloat(num1);
    let val2 = parseFloat(num2);
    console.log(val1);
    return (val1 + val2);
}
function isEven(num) {
  return true;
}

try{
    //needs to be exported for mocha test but throws error in browser console
    module.exports = {isEven, addNumbers};}
catch(err){
}