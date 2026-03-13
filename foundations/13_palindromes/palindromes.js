const palindromes = function (phrase) {
    let clean = phrase.split(/[ ,.!]+/).join("").toLowerCase();
    console.log("clean: ",clean,", length: ", clean.length);
    let revers = [...clean].reverse().join("");
    console.log("rev: ",revers," leng: ", revers.length);
    return clean === revers;
};

// Do not edit below this line
module.exports = palindromes;

console.log(palindromes("Racecar!"));

