var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
    }
    ShoppingCart.prototype.addItem = function (item) {
        var existingItem = this.items.find(function (i) { return i.id === item.id; });
        if (existingItem)
            existingItem.quantity += item.quantity;
        else
            this.items.push(item);
    };
    ShoppingCart.prototype.getTotalPrice = function () {
        return this.items.reduce(function (total, item) { return total + item.price * item.quantity; }, 0);
    };
    return ShoppingCart;
}());
// Example usage
var cart = new ShoppingCart();
cart.addItem({ id: 1, price: 1000, quantity: 1 });
cart.addItem({ id: 2, price: 50, quantity: 2 });
console.log(cart.getTotalPrice()); // Output: 1100
