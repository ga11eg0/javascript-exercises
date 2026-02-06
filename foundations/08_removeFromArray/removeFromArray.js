
const removeFromArray = function(arr, item, ...extra_items) {

    //console.log(arr,item,extra_items);

    // 1. array containing the result 
    let result = [];

    // 2. case 1: only arr and item are passed
    if ( extra_items.length === 0 ){
        // filter checks every element and makes sure its not item so that it is inclued in new array 
        result = arr.filter((a) => a !== item)

    }else if ( extra_items.length > 0 ){ // when we get extra items

        extra_items.push(item);

        // a loop to go through the arr 
        for (let str of arr){
            if(!extra_items.includes(str)){
                result.push(str)
            }
        }
    }

    console.log(result)
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;

removeFromArray(["car","dog","doll","toad","car"],"doll","car","toad");