const shoppingList = ['pizza', 'chips', 'salsa', 'coffee'];
const cart = [];
shoppingList.push('apples');
shoppingList.unshift('bread');

shoppingList.indexOf('coffee',4,'tea');
shoppingList.splice(3,4,"rice","beans");
cart.push(shoppingList[0]);
cart.push(shoppingList[5]);
console.log('shoppingList:', shoppingList);
console.log('cart:', cart);