// VARS
var Model = document.getElementById("model")
var Specs = document.getElementById("spec")
var Prices = document.getElementById("price")
var inStock = document.getElementById("stock")

// console.log(Model)
// console.log(Prices)


Model.innerText = innerText(laptops)
Specs.innerText = "256GB"
Prices.innerText = 990
inStock.innerText = "Var"


var laptops = [
    {
        model: "HP",
        spec: "256GB",
        price: 990,
        stock: true
    },

    {
        model: "ACER",
        spec: "128GB",
        price: 890,
        stock: false
    }
]

function innerText(Model) {
    let result;
    if (stock = true) {
        result = 'ACER';
    } else {
        result = 'HP';
    }
    return result;
}


console.log(innerText(Model))
