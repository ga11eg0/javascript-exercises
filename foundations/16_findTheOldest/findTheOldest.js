const findTheOldest = function(arr) {

    // get a sorted array from younger to oldest 
    const oldest = arr.sort( (a,b ) => {
        
        if (a.yearOfDeath && b.yearOfDeath){
        return (a.yearOfDeath-a.yearOfBirth)-(b.yearOfDeath-b.yearOfBirth);
        }
        else if (a.yearOfDeath === undefined){
            return (2026-a.yearOfBirth)-(b.yearOfDeath-b.yearOfBirth);
        } else if (b.yearOfDeath === undefined){
            return (a.yearOfDeath-a.yearOfBirth)-(2026-b.yearOfBirth);
        }
    } );

    // return the las object from sorted arr (the last element is the oldest)
    return oldest[oldest.length-1]
};

// Do not edit below this line
module.exports = findTheOldest;
