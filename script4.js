const menu = {
    Chicken_Alfredo : "$4",
    AlooCha_FathFatha : "$8",
    Shankarpaalya : "$6",
}

// const keys = Object.keys(menu);

// for (let i=0; i < keys.length; i++){
// const key = keys[i];    
// const value = menu[key];
// const str = `The price of ${key} is ${value}`;
// console.log(str);
// }

for (let key in menu){
    const price = menu[key];
    const tax = Number(price.slice(1)) + 1;
    console.log (`The price of ${item} is $${tax}`);
}