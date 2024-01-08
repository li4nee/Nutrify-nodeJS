# Nutrify API

The Nutrify API provides authentication, user registration, login, and access to food macros and tracking your comsumed food data. It is built using Node.js, Express.js, and MongoDB.


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

## User Registration

During the registration process in the Nutrify API, users are required to provide the following information:

- **Name**: User's full name.
- **Age**: User's age, with a minimum age requirement of 12.
- **Email**: User's email address.
- **Password**: User's chosen password.

To register a new user, make a `POST` request to the `/register` endpoint, providing the mandatory details in the request body.

Example Request:
```json
{
  "name": "John Doe",
  "age": 25,
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

### Login
During the login process in the Nutrify API, users are required to send the following information in the request body:
```json
Email: User's registered email address.
Password: User's corresponding password.
```
To initiate a login, make a POST request to the /login endpoint, providing the user's email and password in the request body.
**In the successful login response, the server provides a JWT token (`_token`) that should be included in the Authorization header of subsequent requests for authentication.**


### Food Endpoints

### Get All Foods
Endpoint: `GET /foods`
Retrieve a list of all available food items.

### Get Foods by Name
Endpoint: `GET /foods/name`
Search for food items by name. Case-insensitive search using regex.

## Example Food Data

```json
{
  "_id": {
    "$oid": "659b8d7f9b442366a019c787"
  },
  "name": "Apple",
  "calorie": 52,
  "protein": 0.3,
  "carbohydrates": 14,
  "fats": 0.2,
  "fibers": 2.4
}
```
