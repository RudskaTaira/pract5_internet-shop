# Internet Shop Project
This TypeScript project demonstrates a basic structure and functionality for an online shop system, showcasing the use of generics for type-safe handling of different product categories (electronics, clothing, and books). The project includes components for product management, shopping cart operations, and utility functions to filter and retrieve products.
##Project Structure
•	types.ts: Defines the base BaseProduct type and specific product types (Electronics, Clothing, Book), each with its unique properties.
•	product.ts: Contains product utility functions:
o	findProduct: Finds a product by id.
o	filterByPrice: Filters products by a maximum price.
•	cart.ts: Manages cart-related operations:
o	addToCart: Adds products to the cart with a specified quantity.
o	calculateTotal: Calculates the total cost of items in the cart.
•	index.ts: The main file for creating test data, applying functions, and logging results to showcase the functionality.
