const repeatString = function(string,number) {

        let result = "";
        if ( number >= 0 ){

            for( let i= 0; i < number; i++){
                result += string;
            }
            return result
        } else{
            return "ERROR"
        }
};

// Do not edit below this line
module.exports = repeatString;

//console.log(repeatString("hey",3));