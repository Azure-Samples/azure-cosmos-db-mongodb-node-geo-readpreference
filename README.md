---
services: cosmos-db
platforms: node
author: viviswan
---

# Using Mongo ReadPreference with Azure Cosmos DB's MongoDB API
Azure Cosmos DB is a globally distributed multi-model database. One of the supported APIs is the MongoDB API, which provides a document model and support for client drivers in many platforms. This sample shows you how to use MongoDB ReadPreference against Azure Cosmos DB with MongoDB API using native NodeJS Mongo driver.

## Running this sample

* Before you can run this sample, you must have the following prerequisites:

   * An active Azure account. If you don't have one, you can sign up for a [free account](https://azure.microsoft.com/free/). Alternatively, you can use the [Azure Cosmos DB Emulator](https://docs.microsoft.com/azure/cosmos-db/local-emulator) for this tutorial.
   * Node JS installation

* Then, clone this repository.

* Next, substitute the `url`, `readFromRegion` in *App.Config* with your Cosmos DB account's values. 

* `npm install` to install dependencies (mongo driver)

* `node index.js`

## About the code
The code included in this sample is intended to illustrate using ReadPreference and tags with Azure Cosmos DB with the MongoDB API for performing reads across geo replicated read regions.

## More information

- [Azure Cosmos DB](https://docs.microsoft.com/azure/cosmos-db/introduction)
- [Azure Cosmos DB : MongoDB API](https://docs.microsoft.com/azure/cosmos-db/mongodb-introduction)
- [MongoDB NodeJS native driver documentation](https://mongodb.github.io/node-mongodb-native/index.html)
- [MongoDB NodeJS ReadPreference documentation](http://mongodb.github.io/node-mongodb-native/2.2/api/ReadPreference.html)