const palindromes = function (phrase) {
    // remove all character that we wont need; " " , . ! ; joint it back and convert to lowercase
    let clean = phrase.split(/[ ,.!]+/).join("").toLowerCase();
    console.log("clean: ",clean,", length: ", clean.length);
    // reverse the cleaned string 
    let revers = [...clean].reverse().join("");
    console.log("rev: ",revers," leng: ", revers.length);
    // compare the cleaned version with the reversed one 
    return clean === revers;
};

// Do not edit below this line
module.exports = palindromes;

console.log(palindromes("Racecar!"));

