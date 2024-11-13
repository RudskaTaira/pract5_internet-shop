import { addToCart, calculateTotal, CartItem } from "./cart";
import { filterByPrice, findProduct } from "./product";
import { Book, Clothing, Electronics } from "./types";

const electronics: Electronics[] = [
    {
        id: 1,
        name: "Smartphone",
        category: 'electronics',
        warranty: "24 months",
        price: 799,
        available: true,
        count: 10,
        description: "High-end smartphone with enhanced camera capabilities.",
        title: "Pixel 6"
    },
    {
        id: 2,
        name: "Gaming Laptop",
        category: 'electronics',
        warranty: "18 months",
        price: 2200,
        available: true,
        count: 5,
        description: "Powerful laptop for gaming with dedicated graphics.",
        title: "Alienware m15"
    },
    {
        id: 3,
        name: "Wireless Earbuds",
        category: 'electronics',
        warranty: "6 months",
        price: 150,
        available: true,
        count: 30,
        description: "Compact wireless earbuds with noise cancellation.",
        title: "AirPods Pro"
    }
];

const clothing: Clothing[] = [
    {
        id: 1,
        name: "Hoodie",
        price: 60,
        available: true,
        count: 25,
        description: "Comfortable cotton hoodie for everyday use.",
        title: "Classic Hoodie",
        category: "clothing",
        size: "L"
    },
    {
        id: 2,
        name: "Joggers",
        price: 40,
        available: true,
        count: 40,
        description: "Stylish joggers made from breathable fabric.",
        title: "Sport Joggers",
        category: "clothing",
        size: "M"
    }
];

const books: Book[] = [
    {
        id: 1,
        name: "Dune",
        price: 18,
        available: true,
        count: 15,
        description: "A classic science fiction novel set in a desert world.",
        title: "Epic Adventure",
        category: "book",
        author: "Frank Herbert",
        genre: "Sci-Fi",
        pagesCount: 412
    },
    {
        id: 2,
        name: "Sapiens: A Brief History of Humankind",
        price: 22,
        available: true,
        count: 12,
        description: "Exploring the history of humankind from ancient to modern times.",
        title: "Humanity's Journey",
        category: "book",
        author: "Yuval Noah Harari",
        genre: "History",
        pagesCount: 443
    }
];

// Тестування функцій
const foundProduct = findProduct(electronics, 1);
console.log("Product found:", foundProduct);

// Фільтрація товарів за ціною
const affordableElectronics = filterByPrice(electronics, 1500);
console.log("Electronics up to 1500:", affordableElectronics);

// Робота з кошиком
let cart: CartItem<Electronics | Clothing | Book>[] = [];
cart = addToCart(cart, electronics[0], 1);
cart = addToCart(cart, clothing[0], 2);
cart = addToCart(cart, books[1], 1);

console.log("Basket:", cart);
console.log("The total cost of the basket:", calculateTotal(cart));
