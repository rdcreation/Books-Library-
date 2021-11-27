const koa    = require('koa');
const kbody  = require('koa-body');
const router = require('./router')
const db = require('./dbConnection');
const app = new koa();

db.connectdb();

app.use(kbody());
app.use(router.routes());


app.listen(2222,()=>{
    console.log("2222 Port is Listening");
})

