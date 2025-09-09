
const express = require('express');

const app = express();

// 1. Be Polite, Greet the User
app.get('/greetings/:username', (req, res) =>{
    res.send(`<h1>Hello there, ${req.params.username}!</h1>`)
})


// 2. Rolling the Dice

app.get('/roll/:number', (req, res) =>{
    // creating random number between 0 and the parameter number
    let randomNum = Math.floor(Math.random() * Number(req.params.number))
// isNan checks if it's not a number which will be true if letters are inside the Number() conversion
// if numbers are inside the Number() then isNan won't be true
    if(isNaN(Number(req.params.number))){
        res.send(`<h1>You must specify a number</h1>`)
    }
    res.send(`<h1>You rolled a ${randomNum}!</h1>`)
})


// 3. I Want THAT One!
app.get('/collectibles/:index', (req, res) =>{
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
  const index = Number(req.params.index)
  if(req.params.index > collectibles.length){
    res.send(`<h1>This item is not yet in stock. Check back soon!</h1>`)
  }
  const item = collectibles[index]
    res.send(`<h1>Hello there, the ${item.name} is ${item.price}!</h1>`)
})


  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];



    app.get('/shoes', (req,res) =>{
        let price = req.query.price
        let type = req.query.type
        let maxPrice = 500
        let minPrice = 20
        let filterPrice = shoes;
        if(price > minPrice && price < maxPrice){
            filterPrice =  shoes.filter(s => s.price >= minPrice && s.price <= maxPrice)
        }else{
            filterPrice = shoes
        } 
        res.json(filterPrice)
    })


const PORT = 3000
app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
})