
var FederalTables = {
    /*
        This Object models the federal Tax tables
        for a weekly paycheck. Each element on each 
        array correspond to a row on the tax tables. 
    
    */  
    minimums : [0,44,224,774,1812,3730,8058,8090],
    maximums : [44,224,774,1812,3730,8058,8090,8090],
    discounts : [0,4.40,15.60,93,147.36,333.86,495.02,867.16],
    percents : [.0,.10,.15,.25,.28,.33,.35,.396],  
    taxTableLength: 7
        
};


var paycheck = {
    amount : 1000,
    biweekly: false,
    monthly: false,
    status: "single", 
   
    federalTax:function() {
       /*
        The federal tax function, loops through each tax table
        comparing the amount earned to each possible tax bracket. 
    
       */
    
        var i = FederalTables.taxTableLength;
    
        while( i > -1){
            if(this.amount < FederalTables.maximums[i] && this.amount > FederalTables.minimums[i]){
            
             var tax = this.amount * FederalTables.percents[i];
             return tax- FederalTables.discounts[i];
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

document.querySelector("#income").textContent = paycheck.federalTax();
