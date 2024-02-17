const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const session=require('express-session');
const cookieParser=require('cookie-parser')
const bodyParser=require('body-parser');

const app=express();
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["POST","GET"],
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json())

app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:false,
        maxAge:1000*60*60*24
    }
}))


const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"swadeshi"
})
app.get('/',(req,res)=>{
    if(req.session.name){
       return res.json("Success",{name:req.session.name});
    }else {
        return res.json("Fail");
    }
}
)
app.post('/swadeshi',(req,res)=>{
    const sql="INSERT INTO login(`name`,`email`,`password`)VALUES(?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.password
        
    ]
    
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login',(req,res)=>{
    const sql="SELECT * FROM login WHERE email=? AND password=?";
    db.query(sql,[req.body.email, req.body.password],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            req.session.name=data[0].name;
            return res.json("Success");
        } else {
            return res.json("Fail");
        }
    });
});

app.get('/cart', (req, res) => {
    const sql = 'SELECT * FROM cart';
    db.query(sql, (err, data) => {
        if (err) {
            throw err;
        }
        res.json(data);
    });
});

// Route to add an item to the cart
app.post('/cart', (req, res) => {
    const newItem = req.body;
    const sql = 'INSERT INTO cart SET ?';
    db.query(sql, newItem, (err, data) => {
        if (err) {
            throw err;
        }
        res.status(201).send('Item added to cart successfully');
    });
});

// Route to remove an item from the cart
app.delete('/cart/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const sql = 'DELETE FROM cart WHERE id = ?';
    db.query(sql, itemId, (err, result) => {
        if (err) {
            throw err;
        }
        res.send('Item removed from cart successfully');
    });
});

// Route to update quantity of an item in the cart
app.put('/cart/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const updatedItem = req.body;
    const sql = 'UPDATE cart SET ? WHERE id = ?';
    db.query(sql, [updatedItem, itemId], (err, result) => {
        if (err) {
            throw err;
        }
        res.send('Item quantity updated successfully');
    });
});

app.listen(8081,()=>{
    console.log("Server is running");
})