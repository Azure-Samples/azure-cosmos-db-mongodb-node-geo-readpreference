---
page_type: sample
languages:
- javascript
products:
- azure
description: "Azure Cosmos DB is a fully managed globally distributed, multi-model database service, transparently replicating your data across any number of Azure regions."
urlFragment: azure-cosmos-db-mongodb-node-geo-readpreference
---

# Using ReadPreference command with Azure Cosmos DB for MongoDB API
Azure Cosmos DB is a fully managed globally distributed, multi-model database service, transparently replicating your data across any number of Azure regions. You can elastically scale throughput and storage, and take advantage of fast, single-digit-millisecond data access using the API of your choice backed by 99.999 SLA. This sample shows you how to use ReadPreference command against Azure Cosmos DB for MongoDB API from a NodeJS application.

## Running this sample

* Before you can run this sample, you must have the following prerequisites:

   * An active Azure account. If you don't have one, you can sign up for a [free account](https://azure.microsoft.com/free/). Alternatively, you can use the [Azure Cosmos DB Emulator](https://docs.microsoft.com/azure/cosmos-db/local-emulator) for this tutorial.
   * Node JS installation

* Then, clone this repository.

* Next, substitute the `url`, `readFromRegion` in *App.Config* with your Cosmos DB account's values. 

* `npm install` to install dependencies (mongo driver)

* `node index.js`

## About the code
The code included in this sample is intended to illustrate using ReadPreference and tags with Azure Cosmos DB for MongoDB API for performing reads across geo replicated read regions.

## More information

- [Azure Cosmos DB](https://docs.microsoft.com/azure/cosmos-db/introduction)
- [Azure Cosmos DB for MongoDB API](https://docs.microsoft.com/azure/cosmos-db/mongodb-introduction)
- [MongoDB NodeJS native driver documentation](https://mongodb.github.io/node-mongodb-native/index.html)
