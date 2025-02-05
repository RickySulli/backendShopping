


# Project Title
### Back-end E-Commerce


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Description
#### This is a mock up for the back-end of an eCommerce website. 

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contribution)
* [Requirements](#Requirements)
* [Questions](#Contact)

## Installation
#### You will need to install certain dependencies.  
#### Initialize node and then install mysql2, sequelize and dotenv

## Usage
https://drive.google.com/file/d/1olK42zq_ITjvqbFTK2iCFAvsTGPKAU-U/view


## License
#### MIT

## Contribution
#### nope

### Requirements
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

### Database Models

Your database should contain the following four models, including the requirements listed for each model:

- `Category`
  - `id`
  - Integer
  - Doesn't allow null values
  - Set as primary key
  - Uses auto increment
  - `category_name`
  - String
  - Doesn't allow null values
- `Product`
  - `id`
  - Integer
  - Doesn't allow null values
  - Set as primary key
  - Uses auto increment
  - `product_name`
  - String
  - Doesn't allow null values
  - `price`
  - Decimal
  - Doesn't allow null values
  - Validates that the value is a decimal
  - `stock`
  - Integer
  - Doesn't allow null values
  - Set a default value of 10
  - Validates that the value is numeric
  - `category_id`
  - Integer
  - References the `category` model's `id`
- `Tag`
  - `id`
  - Integer
  - Doesn't allow null values
  - Set as primary key
  - Uses auto increment
  - `tag_name`
  - String
- `ProductTag`
  - `id`
  - Integer
  - Doesn't allow null values
  - Set as primary key
  - Uses auto increment
  - `product_id`
  - Integer
  - References the `product` model's `id`
  - `tag_id`
  - Integer
  - References the `tag` model's `id`


# Contact 
### Github: [rickysulli](http://github.com/rickysulli)
### Email: dostuffforme@gmail.com
  

