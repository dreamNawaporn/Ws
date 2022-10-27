const express = require("express")
const app = require("c0rs")// Cross-Origin Resource Sharing (CORS)
const port = 3000
const app = express();
const restaurant = require("./database")

//MiddLeware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get("/",function (req,res){ //1
    res.send("<h1>Welcome to restaurant API</h1>")
})

app.get("/restaurant",(req,res) => { //2
    res.json(restaurant)
})
app.get("/restaurant/:id",(req,res) =>{  //3
    const restaurantId = Number.parseInt(req.params.id)
    const restaurants = restaurant.find(
        restaurant => restaurant.id === restaurantId)
    res.json(restaurants)
})

//insert new restaurant
//http://Localhost:3000/restaurants
app.pont("/restaurants",(req, res)=>{
    const newRestaurant = {
        id: req.body.id,
        name: req.body.name,
        type: req.body.type,
        imageURL: req.body.mageURL
    }
    restaurants.push(rwq.params.id);
    res.json(newRestaurant);
});
//Update restaurant information 
//http://localhost:3000/restaurants/1
app.put("restaurants/:id", (req, res) => { 
    const restaurantId = Number.parseInt(req.params.id);
    const index = restaurants.findIndex( 
        (restaurant) => restaurant.id = restaurantId
    ); 
    const newRestaurant =   
        id: restaurantId,   
        name: req.body.name,    
    t   ype: req.body.type,    
        imageURL: req.body.imageURL
});
restaurants.push(rwq.params.id);
res.json(newRestaurant);