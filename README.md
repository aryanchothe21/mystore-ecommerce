
🛒 My Store – E-Commerce Web Application
My Store is a full-stack E-Commerce web application built using React (Frontend) and Spring Boot (Backend).
It allows users to browse products, add items, and manage product listings with image upload support.

🚀 Tech Stack
🔹 Frontend
React.js (Vite)
Axios
Bootstrap / CSS
React Hooks

🔹 Backend
Spring Boot
Spring Data JPA
Hibernate
REST API
MySQL Database

✨ Features
🛍️ View All Products
➕ Add New Product
📝 Update Product
❌ Delete Product
🖼️ Upload Product Image
🔎 Search Products
🌐 REST API Integration
📦 Database Storage
🏗️ Project Architect 

Frontend (React)
        ↓
REST API (Spring Boot)
        ↓
MySQL Database
📂 Project Structure
Backend (Spring Boot)
Copy code

ecom-proj/
│
├── controller/
├── service/
├── repository/
├── model/
└── application.properties
Frontend (React)
Copy code

frontend-eccomerce/
│
├── components/
├── App.jsx
├── main.jsx
└── package.json

⚙️ How to Run the Project
🔹 Backend Setup
Open project in IntelliJ
Configure MySQL in application.properties
Run Spring Boot Application
Properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/mystore
spring.datasource.username=root
spring.datasource.password=yourpassword
🔹 Frontend Setup
Bash
Copy code
npm install
npm run dev
Open browser:
Copy code

http://localhost:5173
🔌 API Endpoints
Method
Endpoint
Description
GET
/api/products
Get all products
POST
/api/product
Add product
PUT
/api/product/{id}
Update product
DELETE
/api/product/{id}
Delete product 

📚 Concepts Covered
RESTful API Development
CRUD Operations
Image Upload using MultipartFile
React State Management
Axios API Integration
Spring Boot + JPA + Hibernate

🎯 Learning Outcome
Built full-stack application
Understood frontend-backend integration
Implemented file upload system
Hands-on experience with real-world project structure

🔮 Future Improvements
🛒 Add to Cart functionality
💳 Payment Gateway Integration
🔐 Authentication (JWT)
👤 User Login & Registration
📊 Admin Dashboard

👨‍💻 Author
Aryan Chothe

B.Tech Student | Java | Spring Boot | React Developer
