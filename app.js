const mysql = require('mysql');
const express = require('express');
const app = express();
const connection = require('./dbConnection')

module.exports = app