const mongoose = require('mongoose');
const appKeys = require('./appKeys');
const { db:{ host,name } } = appKeys;
const connectionString = `mongodb://${host}/${name}`;
mongoose.Promise = global.Promise;
const dbConfig = mongoose.connect(connectionString,function(error){
    if(error){
        console.log('Not a connection');
    }else{
        console.log('Connection established');
    }
});

module.exports = dbConfig;