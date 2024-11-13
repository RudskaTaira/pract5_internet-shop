# Internet Shop Project

## Project Overview
This TypeScript project demonstrates a basic structure and functionality for an online shop system. It showcases the use of generics for type-safe handling of different product categories, such as electronics, clothing, and books. The project includes components for product management, shopping cart operations, and utility functions to filter and retrieve products.

## Objectives
- Learn the fundamentals of generic types in TypeScript.
- Create type-safe functions for managing product data.
- Apply generics in a practical context for handling different types of products in an online store.

## Project Structure

- **types.ts**: Defines the base `BaseProduct` type and specific product types (Electronics, Clothing, Book), each with its unique properties.
- **product.ts**: Contains product utility functions:
  - `findProduct`: Finds a product by `id`.
  - `filterByPrice`: Filters products by a maximum price.
- **cart.ts**: Manages cart-related operations:
  - `addToCart`: Adds products to the cart with a specified quantity.
  - `calculateTotal`: Calculates the total cost of items in the cart.
- **index.ts**: The main file for creating test data, applying functions, and logging results to showcase the functionality.