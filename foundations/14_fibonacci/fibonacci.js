const fibonacci = function(limit) {

    lim = typeof limit === "string" ? Number(limit) : limit;
    if( lim >= 0 && (!Number.isNaN(lim))){
        let ans = 0;
        for (i= 1, j= 0, n = 0; i <= lim; i++){
        
            ans = i < 2 ? 1 : j + n; 
            n = j;
            j = ans;
            //console.log("iteration :", i,", value: ",ans);
            };
        return ans;
    } else{
        return "OOPS";
    }
    
};

// Do not edit below this line
module.exports = fibonacci;

console.log(fibonacci("4k"));