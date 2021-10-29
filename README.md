# E-commerce-backend

## Table of Contents 

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Link](#link)
- [Questions](#questions)

<br />

## Description
Back end for an e-commerce site using Express.js and Sequelize to interact with a MySQL database.

## Installation
To use this application, clone the repository to your local machine:
```
git clone git@github.com:chloeharris1/e-commerce-backend.git
```

After cloning, you will need to create a .env file including the variables below in order for the application to run.
``` 
DB_USER='root'
DB_PW='mySql password'
DB_NAME='ecommerce_db'
```
Next, install the dependencies with command:
```
npm init 
```
```
npm install mysql2
```
```
npm install sequelize
```
```
npm install dotenv
```
## Usage
When you want to run the application, type the below into your terminal command line:
```
mysql -u root -p
(Enter password) 
```
```
source db/schema.sql
```
```
npm run seed
```
```
npm start
```

## Link

Link to deployed application:

https://vast-lake-74700.herokuapp.com/

## Questions

If you have any questions about the project, contact me at: 
chloe.a.harris17@gmail.com <br />
Check out my GitHub profile at: 
[chloeharris1](https://github.com/chloeharris1/) <br />