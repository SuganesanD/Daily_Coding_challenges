// create a interface for shopping cart and execute some functions like adding to cart and removing from cart.
interface CartItem {
    id: number;
    price: number;
    quantity: number;
}
class ShoppingCart {
    items: CartItem[] = [];
    addItem(item: CartItem): void {
        const existingItem = this.items.find(i => i.id === item.id);
        if (existingItem) existingItem.quantity += item.quantity;
        else this.items.push(item);
    }
    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
}

const cart = new ShoppingCart();
cart.addItem({ id: 1, price: 1000, quantity: 1 });
cart.addItem({ id: 2, price: 50, quantity: 2 });
console.log(cart.getTotalPrice()); 
