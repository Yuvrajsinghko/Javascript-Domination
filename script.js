 
let totalPrize; 

 
function totalcost(totalPrize){
    
    let shippingCost;
    //code logic

    if (totalPrize <=10){
        shippingCost =5;
    }else if (totalPrize <= 20){
        shippingCost = 3;
    }else{
        shippingCost = 0;
    }

    console.log(`shippingCost for you is  ${shippingCost}`)

}
totalPrize=10;

totalcost(totalPrize)

totalPrize=40;
totalcost(totalPrize)
