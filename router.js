
const Router  = require("koa-router");
const router = new Router();


const userdetails = require('./Controller/userDetails');
const books = require('./Controller/books');


router
.post('/adduser',userdetails.adduserdeatils)
.get('/getuser',userdetails.getuserdeatils)
.post('/addbook',books.addbooks)

module.exports=router;

// 



