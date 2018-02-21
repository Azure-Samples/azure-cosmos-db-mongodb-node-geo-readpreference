var MongoClient = require('mongodb').MongoClient
var ReadPreference = require('mongodb').ReadPreference
  , assert = require('assert');
// Connection URL - Paste your db account connection string from Azure portal
var url = '';
// readTargetRegion - this will be used to read From while using Tags
var readFromRegion = "Japan West";

function doReads(client) {
  setTimeout(readDefaultfunc, 1000, client);
  setTimeout(readFromSecondaryfunc, 1000, client);
  setTimeout(readFromNearestfunc, 1000, client);
  setTimeout(readFromRegionfunc, 1000, client, readFromRegion);

  }

  function readDefaultfunc(client) {
    var query = {};
    var readcoll = client.db('regionDB').collection('regionTest');
    readcoll.find(query).toArray(function(err, data) {
      assert.equal(null, err);
      console.log("readDefaultfunc query completed!");
    });
  }

  function readFromSecondaryfunc(client) {
    var query = {};
    var readcoll = client.db('regionDB').collection('regionTest', {readPreference: ReadPreference.SECONDARY});
    readcoll.find(query).toArray(function(err, data) {
      assert.equal(null, err);
      console.log("readFromSecondaryfunc query completed!");
    });
  }

function readFromNearestfunc(client) {
  var query = {};
  var readcoll = client.db('regionDB').collection('regionTest', {readPreference: ReadPreference.NEAREST});
  readcoll.find(query).toArray(function(err, data) {
    assert.equal(null, err);
    console.log("readFromNearestfunc query completed!");
  });
}


function readFromRegionfunc(client, regionName) {
  var query = {};
  var readcoll = client.db('regionDB').collection('regionTest',{readPreference: new ReadPreference(ReadPreference.SECONDARY_PREFERRED, {"region": regionName})});
  readcoll.find(query).toArray(function(err, data) {
    assert.equal(null, err);
    console.log("readFromRegionfunc query completed!");
  });
}

// Use connect method to connect to the server
MongoClient.connect(url, {
  autoReconnect : true
}, function(err, client) {
  assert.equal(null, err);
  console.log("connected!");

  setInterval(doReads, 1000, client); 
});