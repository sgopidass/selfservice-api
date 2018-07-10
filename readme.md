# Self Service API

This is a starter for anyone who wants to build a self service API. It covers the basics of building an API service for Nodejs developers.
  

## Introduction

This API service is a a guide to build and structure an API with add-on resources for documentation using swagger and other logging mechanisms.


![](/static/swagger.png)

  
OS X & Linux:

  

```sh

git clone git@github.com:sgopidass/selfservice-api.git

```

  

## Installation

  

The application requires:

1. git

2. nodeJS v9.10.1

3. npm (comes with nodeJS)

5. mongo (see installation guide [mongo])

6. SQL Server Connection

7. a configuration file (.env file at your project folder)

  

Once they are setup

  

To install dependencies, cd into the project directory and run the following command:

```sh

npm install

```

## Usage

This self service API is built to serve http GET requests for retrieving data from :

* Array of Objects (GET /books)

* Collections in MongoDB (GET /publishers)

* Tables in SQL ServerDB (GET /authors)

  

So its required to have access to mongo and SQL Server and store the connection settings in .env file and the moongoose file respecively

  
  

## Running the application

cd into the project folder and run,

```sh

node server.js

```
Go to
```sh
http://localhost:3000/docs/#/
```
  

## Release History

  

* 0.1.0


  

## Contributing

  

1. Fork it (<https://github.com/yourname/yourproject/fork>)

2. Create your feature branch (`git checkout -b feature/fooBar`)

3. Commit your changes (`git commit -am 'Add some fooBar'`)

4. Push to the branch (`git push origin feature/fooBar`)

5. Create a new Pull Request

  

<!-- Markdown link & img dfn's -->
[mongo]: https://docs.mongodb.com/manual/administration/install-community/