<h1>Ask-IT-Backend</h1>

Backend for asking and aswering questions built with NodeJS, Express, JSX, ES6, passport, sequelize, postgress database, JWT Authentication ...

To run it locally in the project directory, run:

### `npm install`

to install all dependecies.

Provide in .env DATABASE_URL and JWT_SECRET that can be any value.

Then run following to create the schema and tables:

node_modules/.bin/sequelize db:migrate

for seed the data into database run:

npx sequelize-cli db:seed:all

Run the app with: 

### `npm run start`

The client for the app: https://github.com/Elvin-Va/Ask-IT-Client
