console.log('Shivam Varshney');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
console.log('Shivam Varshney After Updating');