const sumAll = function(a,b) {

    let result = 0; 
    if ( Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0){
        if ( a < b ){
            for (let i = a; i <= b; i++){
                result += i;
            } 
        } else {
            for (let i = b; i <= a; i++){
                result += i;
            } 
        }
    } else{
        return "ERROR"
    }

    return result

};

// Do not edit below this line
module.exports = sumAll;
console.log(sumAll(2,4))