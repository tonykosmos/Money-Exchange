// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency>10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency==0) return{};
    var object = {};
    let half = 0;
    let quo = 0;
    let ten = 0;
    let five = 0;
    let one = 0;

    while (currency>=50){
    currency = currency-50;
     half++;
     
    }
    if (half!=0) object.H = half;
    
    while (currency>=25){
        currency = currency-25;
         quo++;
         
    } 
        if (quo!=0) object.Q = quo;

    while (currency>=10){
        currency = currency-10;
         ten++;
         
    } 
        if (ten!=0) object.D = ten;

    while (currency>=5){
        currency = currency-5;
         five++;
        
    } 

        if (five!=0) object.N = five; 
    while (currency>=1){
        currency = currency-1;
         one++;
         
    } 
    if (one!=0) object.P = one;
    return object;    
}
