
var paycheck = {
    amount : 1000,
    biweekly: true,
    monthly: false,
    status: "single", 
    /*
        The federal tax function, loops through each tax table
        comparing the amount earned to each possible tax bracket. 
    
    */
    
    federalTax:function() {
        var i = minimums.length-1;
        var minimums = [0,44,224,774,1812,3730,8058,8090];
        var maximums = [44,224,774,1812,3730,8058,8090,8090];
        var discounts = [0,4.40,15.60,93,147.36,333.86,495.02,867.16];
        var percents = [.0,.10,.15,.25,.28,.33,.35,.396];
        
    
        while( i > -1){
            if(this.amount < maximums[i] && this.amount > minimums[i]){
            
             var tax = this.amount * percents[i];
             return tax- discounts[i];
            } else{
                
                 i= i - 1;
            };
           
        }; 

    
    
        
    
    }
        
    

    }
    

if (paycheck.biweekly === paycheck.monthly){
    
    console.log("Error: Inconsistent Pay Frequency.");
}

paycheck.amount = 500;
console.log(paycheck.federalTax());

