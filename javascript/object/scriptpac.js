function getOutput() {
    let product = {
        name: "samsung",
        model: "galaxy",
        price: [{
                ram: '16GB',
                amount: '15500',
        },
        {
            ram : '32GB',
            amount : '17500',
        },
        {
            ram : '64GB',
            amount : '18000',
        }

        ]
    }
}
document.getElementById("name").innerHTML = product.name;
document.getElementById("model").innerHTML = product.model;
var pricedata = "<table border='1' width='60'>"