# TechStop E-Commerce Platform

## Project Overview

TechStop is a modern e-commerce platform built with React.js and .NET 9. The application features a sleek interface for browsing tech products, with a responsive design that works across different devices. The platform includes core e-commerce functionality like product browsing, cart management, and a streamlined checkout process.

## Features

- **Product Catalog**: Browse through various tech products
- **Best Sellers Section**: Carousel display of featured products
- **Product Details**: View detailed information about each product
- **Shopping Cart**: Add, remove, and adjust quantities of items
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Visual Navigation**: Intuitive controls for browsing through product sections

## Tech Stack

### Frontend

- React 19.0
- React Bootstrap 2.10
- React Router 7.3
- Axios for API requests
- React Icons

### Backend

- .NET 9.0
- Entity Framework Core
- SQLite Database
- RESTful API architecture
- Swagger for API documentation

## Project Structure

### db setup

delete the .db file before loading backend(dotnet run)

### Frontend Setup

1. Navigate to the frontend directory:

   ```
   cd frontend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
   The application will be available at http://localhost:3000

## API Endpoints

| Endpoint                 | Method | Description                             |
| ------------------------ | ------ | --------------------------------------- |
| `/api/Items`             | GET    | Get all products                        |
| `/api/Items/{id}`        | GET    | Get a specific product by ID            |
| `/api/Items/BestSellers` | GET    | Get all products marked as best sellers |

## Database

The application uses SQLite for data storage. The database is automatically created and seeded with initial data when the backend application runs for the first time.

## Future Enhancements

- User authentication and account management
- Order processing and history
- Payment gateway integration
- Admin panel for product management
- Product reviews and ratings
- Filtering and search functionality
- Wishlist feature
