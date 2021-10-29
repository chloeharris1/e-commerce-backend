# E-commerce-backend

## Table of Contents 

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
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
## Screenshots
![productsPNG](https://user-images.githubusercontent.com/89039793/139467182-0a52d7c7-1d05-46a7-ae59-485e97b95157.PNG)

![catbyid](https://user-images.githubusercontent.com/89039793/139467264-b885df3b-65c2-4d3b-bc52-19c4c0419b32.PNG)

![createtag](https://user-images.githubusercontent.com/89039793/139467325-1643aff0-96e2-47fc-ab90-4d19e4e72284.PNG)

## Link

Link to deployed application:

https://vast-lake-74700.herokuapp.com/

## Questions

If you have any questions about the project, contact me at: 
chloe.a.harris17@gmail.com <br />
Check out my GitHub profile at: 
[chloeharris1](https://github.com/chloeharris1/) <br />
