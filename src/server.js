const express = require('express');
const mysql = require('sqlite3').verbose();

const db = new mysql.Database('./todo.db');

const app = express();

app.listen('3000', () => {
  console.log(`Hey, what's up, hello!`);
});