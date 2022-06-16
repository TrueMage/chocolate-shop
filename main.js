const priceChocolate = 1;
const priceFreeChocolate = 3;


function getResult(){
    let money = $( "#balance-input" ).val();
    let chocolate = 0;
    let wraps = $( "#wrap-input" ).val() != "" ? $( "#wrap-input" ).val() : 0;

    for(; money >= priceChocolate; money-=priceChocolate){
        chocolate++;
        wraps++;
    }

    for(; wraps >= priceFreeChocolate; wraps-=priceFreeChocolate){
        chocolate++;
    }

    $( "#quantity-chocolate" ).html(chocolate + "x")
    $( "#quantity-wraps" ).html(wraps + "x")
}

setInterval(getResult, 100);