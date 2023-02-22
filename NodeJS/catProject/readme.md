# Node.js and Express Cats CRUD API

This is a simple CRUD (Create, Read, Update, Delete) RESTful API for managing cats built using Node.js and Express framework. The API uses MySQL as its database to store and retrieve data.

## Prerequisites

To run this project, you need to have the following installed on your machine:

- Node.js
- MySQL

## Getting Started

To get started, clone the repository and install the required dependencies using the following commands:

```bash
git clone https://github.com/yourusername/cats-crud-api.git
cd cats-crud-api
npm install
```

## Database Configuration

You need to configure the database before you can run the API. Create a MySQL database and execute the following SQL commands to create the required cats table:

```sql
CREATE TABLE `cats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `age` int NOT NULL,
  `breed` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);
```
