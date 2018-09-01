function Cart () {
    this.items = [];
    this.add = function (item) {
        this.items.push(item)
    }
    this.getContents = function () {
        console.log(this.items);
    } 
}
let item1 = {
    art: "art1",
    name: "Dress",
    prise: 100
};
let item2 = {
    art: "art2",
    name: "Top",
    prise: 20
};
let item3 = {
    art: "art3",
    name: "Body",
    prise: 40
};
function item(art, name, prise) {
    this.art = art;
    this.name = name;
    this.prise = prise;
}
let itemsList = [new item("art1", "Dress", 100), new item("art2", "Top", 20), new item("art3", "Body", 40)],
    cart = new Cart;
function addToCart(art) {
    for (let i = 0, len = itemsList.length; i < len; i++){
        if(itemsList[i].art === art){
            cart.add(itemsList[i]);
            alert("Successfully!")
        }
    }
}
let money = 0;
function countCartPrise() {
    for (let n in itemsList) {
        let itemList = itemsList[n];
        money += itemList["prise"];
    }
    return money;
}
console.log(countCartPrise(itemsList));
function getCart() {
    cart.getContents();
}