//jshint esversion:6
const MongoClient = require("mongodb").MongoCLient;
const assert = require('assert');

const url = "mongodb://localhost:27017";

const dbName = 'fruitsDB';

const client = new MongoClient(url);

client.connect(function(err) {
    assert.equal(null, err);
    console.o=log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();
});
