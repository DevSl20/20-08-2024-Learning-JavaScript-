function converttoNum(amount) {
    let amountInt;

    //Remove $ sign
    amountInt = amount.slice(1);

    //Replace
    amountInt = amountInt.replace(",","");

    //Convert to Num
    return parseInt(amountInt);

}

function itemsPurchased(store, wallet){
    //Creating empty list 
    const filteredItems = [];

    //Converting wallet to a num
    wallet = converttoNum(wallet);

    //Iterating over store items
    for (let items in store) {
        if (converttoNum(store[items]) <= wallet){
        filteredItems.push(items);
    }

}
    return filteredItems.length > 0 ? filteredItems.sort(): "Nothing";
}


const x = itemsPurchased(
    {
        Apple: "$4",
        Honey: "$3",
        Fan: "$14",
        Bananas: "$4",
        Pan: "$100",
        Spoon: "$2"
        },"$100"
);

console.log(x);
