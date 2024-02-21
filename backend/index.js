const express = require('express');
const server = express();
const mysql = require('mysql2/promise');
const cors = require('cors')

const productsRouter = require('./routes/Products');
const categoriesRouter = require('./routes/Categories');
const brandsRouter = require('./routes/Brands');
const usersRouter = require('./routes/Users');
const authRouter = require('./routes/Auth');
const cartRouter = require('./routes/Cart');
const ordersRouter = require('./routes/Order');
const bodyParser=require('body-parser');



//middlewares attached
server.use(cors({
    exposedHeaders:['X-Total-Count']
}))
server.use(express.json()); // to parse the req.body
server.use('/products', productsRouter)
server.use('/categories', categoriesRouter)
server.use('/brands', brandsRouter)
server.use('/users', usersRouter)
server.use('/auth', authRouter)
server.use('/cart', cartRouter)
server.use('/orders', ordersRouter)

main().catch(err=> console.log(err));

async function main(){
    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'swadeshi',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
      });
    
    console.log('database connected');
    
    server.get('/',(req, res)=>{
        res.json({status:'success'})
    });
    
    server.listen(8081, ()=>{
        console.log('server started ')
    });
}
