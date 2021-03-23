require('dotenv').config();
require('./passport');
require('./db.js');
const express=require('express');
const app=express();
const Product=require('./models/Product.js');
const User=require('./models/User.js');
const passport = require('passport');
const userRouter = require('./routes/user.routes');
const PORT=process.env.PORT || 3000;
const router=express.Router();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(passport.initialize())
app.use('/routes', userRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

function orderByName(elementList){
    let elementToSwap=null;
    for(i=0;i<elementList.length-1;i++){
        for(j=i+1;j<elementList.length;j++){
            if(elementList[i].name>elementList[j].name){
                elementToSwap=elementList[j];
                elementList[j]=elementList[i];
                elementList[i]=elementToSwap;
            }
        }
    }
    
    return elementList;
}

function orderByPrice(elementList){
    let elementToSwap=null;
    for(i=0;i<elementList.length-1;i++){
        for(j=i+1;j<elementList.length;j++){
            
            if(parseFloat(elementList[i].price.slice(1))>parseFloat(elementList[j].price.slice(1))){
                elementToSwap=elementList[j];
                elementList[j]=elementList[i];
                elementList[i]=elementToSwap;
            }
        }
    }
    
    return elementList;
}

router.get("/users",async (req, res)=>{
    console.log("Entra")
    try{
        const users=await User.find();
        console.log(users)
        return res.status(200).json(await users);
    }catch(err){
        console.log("Error: "+error);
        return res.status(500).send(err);
    }
});

router.get('/user=:id',(req,res)=>{
    return res.sendStatus(200);
});

router.get('/register', (req, res, next) => {
    res.render('register.hbs');
});


router.get('/productlist-page=:id',async (req,res)=>{  //Ruta para pedir productos de 10 en 10
    const pagina=parseInt(req.params.id);
    try{
        const products=await Product.find();
        if(pagina<0 || (pagina+1)*10>products.length) throw "Indice de página no soportado";
        return res.status(200).json(products.slice(pagina*10,(pagina+1)*10));
    }catch(err){
        return res.status(500).send(err);
    }
});

router.get('/products-by-name',async (req,res)=>{
    try{
        const products=await Product.find();
        return res.status(200).json(orderByName(products));
    }catch(err){
        return res.status(500).send(err);
    }
});

router.get('/products-by-price',async (req,res)=>{
    try{
        const products=await Product.find();
        return res.status(200).json(orderByPrice(products));
    }catch(err){
        return res.status(500).send(err);
    }
});

router.get("/add-cart/user=:userid/product=:productid",async (req,res)=>{
    try{
        const user=await User.findById(req.params.userid);
        user.cart.push(req.params.productid);
        console.log(user.cart);
        user.save();  
        return res.sendStatus(200);
    }catch(err){
        return res.status(500).send(err);
    }

});

router.get("/show-cart/user=:userid",async (req,res)=>{
    try{
        const user=await User.findById(req.params.userid);
        let productList=[];
        for(i=0;i<user.cart.length;i++){   
            productList.push(await Product.findById(user.cart[i]));
        };
        return res.status(200).json(productList);
    }catch(err){
        return res.status(200).send(err);
    }
});


app.use('/',router);

app.listen(PORT, () => {
    console.log('Listening in http://localhost:'+PORT);
});

