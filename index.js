const express = require('express');
const connection = require("./connection");
const companyRoute = require('./routes/company');
const staffRoute = require('./routes/staff')
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/company',companyRoute);
app.use('/staff',staffRoute);

module.exports = app;