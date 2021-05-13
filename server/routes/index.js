const express = require('express')
const connection   = require('../config/db.js');

const router = express.Router()
const usersRouter = require('./userRouter/index')

router.use('/users', usersRouter)

router.get(
  '/test', (req,res,next) =>{
    connection.query('SELECT * from user', (error, rows) => {
      if (error) throw error;
      console.log('User info is: ', rows);
      res.send(rows);
    });
  }
)

module.exports = router