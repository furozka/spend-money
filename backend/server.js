const app = require("express")();
const cors = require("cors");
const { json } = require("body-parser");

app.use(cors())
app.use(json())

app.get("/", (req,res)=>{
    res.send("Hello")
})

let products = [
    {id: "1", name: "Learn Language", img: "https://cdn-media-1.freecodecamp.org/images/1*y6C4nSvy2Woe0m7bWEn4BA.png", price: "200"},{id: "1", name: "Learn Language", img: "https://cdn-media-1.freecodecamp.org/images/1*y6C4nSvy2Woe0m7bWEn4BA.png", price: "200"}
]

app.get("/products", (req,res)=>{
    res.send(products)
})

app.post("/products", (req,res)=>{
    products = [...products]
})




app.listen("7000", console.log("Server is up at 7000 port"))