# 🛒 MyStore — E-Commerce Application

A full-stack e-commerce web application for managing products, built with **Spring Boot** (REST API) on the backend and **React (Vite)** on the frontend. Supports full CRUD operations on products, including image upload and keyword search.

## 🚀 Tech Stack

**Backend**
- Spring Boot 4
- Spring Data JPA / Hibernate
- H2 (in-memory database)
- Lombok
- Maven

**Frontend**
- React 18 + Vite
- Axios
- React Bootstrap
- React Router DOM

## ✨ Features

- 📦 View all products
- 🔍 View single product by ID
- ➕ Add a new product (with image upload)
- ✏️ Update an existing product
- ❌ Delete a product
- 🖼 Store and serve product images
- 🔎 Search products by keyword
- 🌐 REST API with clean layered architecture (Controller → Service → Repository → Model)

## 📁 Project Structure

```
mystore-ecommerce/
├── Backend/
│   └── ecom-proj/
│       ├── src/main/java/com/example/ecom_proj/
│       │   ├── controller/    # ProductController.java
│       │   ├── service/       # ProductService.java
│       │   ├── repository/    # ProductRepo.java
│       │   └── model/         # Product.java
│       ├── src/main/resources/
│       │   └── application.properties
│       └── pom.xml
└── Frontend/
    ├── src/
    │   ├── Component/
    │   ├── Context/
    │   ├── App.jsx
    │   ├── Axios.jsx
    │   └── main.jsx
    └── package.json
```

## ⚙️ Getting Started

### Prerequisites
- Java 17+ and Maven
- Node.js (v18+) and npm

### Backend Setup (Spring Boot)

```bash
cd Backend/ecom-proj
./mvnw spring-boot:run
```

The backend runs on `http://localhost:8080` and uses an **H2 in-memory database** out of the box — no external DB setup needed. Data resets on every restart.

> To use a persistent database like MySQL instead, update `src/main/resources/application.properties` with your own `spring.datasource.url`, `username`, and `password`, and add the MySQL connector dependency to `pom.xml`.

### Frontend Setup (React + Vite)

```bash
cd Frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and is pre-configured (via CORS on the backend) to talk to the API at `http://localhost:8080`.

## 🔌 API Endpoints

| Method | Endpoint                        | Description                  |
|--------|----------------------------------|-------------------------------|
| GET    | `/api/products`                 | Get all products              |
| GET    | `/api/product/{id}`             | Get a single product by ID    |
| POST   | `/api/product`                  | Add a new product (multipart: product + imageFile) |
| PUT    | `/api/product/{id}`             | Update a product (multipart)  |
| DELETE | `/api/product/{id}`             | Delete a product               |
| GET    | `/api/product/{productId}/image`| Get a product's image          |
| GET    | `/api/products/search?keyword=` | Search products by keyword     |

## 🔮 Future Improvements

- 🛒 Add to Cart functionality
- 💳 Payment gateway integration
- 🔐 JWT authentication
- 👤 User login & registration
- 📊 Admin dashboard

## 👨‍💻 Author

**Aryan Chothe**
- [GitHub](https://github.com/aryanchothe21)
- [LinkedIn](https://www.linkedin.com/in/aryan-chothe-366b60287)
