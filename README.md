# Nutrify API

The Nutrify API provides authentication, user registration, login, and access to food macros and tracking data. It is built using Node.js, Express.js, and MongoDB.


## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Authentication](#authentication)
- [User Registration](#user-registration)
- [Login](#login)
- [Food Endpoints](#food-endpoints)
  - [Get All Foods](#get-all-foods)
  - [Get Foods by Name](#get-foods-by-name)


## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running on your local machine

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/nutrify-api.git


2.Install dependencies
```bash
npm install 
```

3.Start the server
```
npm start
```

### Authentication
The API uses JSON Web Tokens (JWT) for authentication. Include the generated token in the Authorization header of your requests.

### User Registration

Endpoint: POST /register
Register a new user by providing the required details in the request body.

### Login
Endpoint: POST /login
Login with existing credentials. Receive a JWT token upon successful login for authentication in subsequent requests.

### Food Endpoints

### Get All Foods
Endpoint: GET /foods
Retrieve a list of all available food items.

### Get Foods by Name
Endpoint: GET /foods/:name
Search for food items by name. Case-insensitive search using regex.
