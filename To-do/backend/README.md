# Todo App Backend

This is the backend for a Todo application built with Node.js, Express, and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/todo-app-backend.git
    cd todo-app-backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `default.json` file in the `config` directory with the following content:
    ```json
    {
      "mongoURI": "your_mongodb_connection_string",
      "jwtSecret": "your_jwt_secret",
      "jwtExpiresIn": "1h"
    }
    ```

4. Start the server:
    ```sh
    npm run dev
    ```

## Usage

The server will start on `http://localhost:5000`. You can use tools like Postman to test the API endpoints.

## API Endpoints

### Auth

- **Register User**
    - `POST /api/auth/register`
    - Body: `{ "name": "string", "email": "string", "password": "string" }`

- **Login User**
    - `POST /api/auth/login`
    - Body: `{ "email": "string", "password": "string" }`

### Todos

- **Get All Todos**
    - `GET /api/todos`
    - Headers: `{ "x-auth-token": "your_jwt_token" }`

- **Create Todo**
    - `POST /api/todos`
    - Headers: `{ "x-auth-token": "your_jwt_token" }`
    - Body: `{ "title": "string", "description": "string" }`

- **Update Todo**
    - `PUT /api/todos/:id`
    - Headers: `{ "x-auth-token": "your_jwt_token" }`
    - Body: `{ "title": "string", "description": "string", "completed": "boolean" }`

- **Delete Todo**
    - `DELETE /api/todos/:id`
    - Headers: `{ "x-auth-token": "your_jwt_token" }`

## License

This project is licensed under the ISC License.