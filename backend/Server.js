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

// Route to add an item to the cart
// Route to add an item to the cart
app.post('/cart', (req, res) => {
    const newItem = req.body;
    const { id, name, href, color, price, quantity, imageSrc, imageAlt } = newItem;
    const sql = 'INSERT INTO cart (id, name, href, color, price, quantity, imageSrc, imageAlt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [id, name, href, color, price, quantity, imageSrc, imageAlt];
    db.query(sql, values, (err, data) => {
        if (err) {
            throw err;
        }
        res.status(201).send('Item added to cart successfully');
    });
});

app.get('/cart', (req, res) => {
    res.json({ cartItems, grandTotal: calculateGrandTotal(cartItems) });
  });
  
  app.post('/cart/:itemId', (req, res) => {
    const { itemId } = req.params;
    const { quantity } = req.body;
  
    const index = cartItems.findIndex(item => item.id === itemId);
    if (index !== -1) {
      cartItems[index].quantity = Number(quantity);
    }
  
    res.json({ message: 'Cart updated successfully', cartItems, grandTotal: calculateGrandTotal(cartItems) });
  });
  
  app.delete('/cart/:itemId', (req, res) => {
    const { itemId } = req.params;
    cartItems = cartItems.filter(item => item.id !== itemId);
    res.json({ message: 'Item removed from cart successfully', cartItems, grandTotal: calculateGrandTotal(cartItems) });
  });
  
  app.delete('/cart', (req, res) => {
    cartItems = [];
    res.json({ message: 'Cart cleared successfully', cartItems, grandTotal: calculateGrandTotal(cartItems) });
  });
  
  // Helper function to calculate grand total
  const calculateGrandTotal = (items) => {
    return items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };
  
app.listen(8081,()=>{
    console.log("Server is running");
})