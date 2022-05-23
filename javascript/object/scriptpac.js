function getOutput() {
    let product = {
        name: "samsung",
        model: "galaxy",
        price: [
            {
                ram: '16GB',
                amount: '15500'
            },
            {
                ram : '32GB',
                amount : '17500'
            },
            {
                ram : '64GB',
                amount : '18000'
            },
            {
                ram : '64GB',
                amount : '18000'
            },
            {
                ram : '64GB',
                amount : '18000'
            },
            {
                ram : '64GB',
                amount : '18000'
            },
            {
                ram : '64GB',
                amount : '18000'
            }
        ]
    }
    
    document.getElementById("name").innerHTML = product.name;
    document.getElementById("model").innerHTML = product.model;

    var pricedata = "<table border='1' width='100%'>";
    pricedata += "<tr><th>Ram</th><th>Price</th></tr>"

    for(container in product.price){
        pricedata += "<tr><td>" + product.price[container].ram + "</td><td>"+ product.price[container].amount +"</td></tr>"
    }
   

    pricedata += "</table>"




    document.getElementById("pricedata").innerHTML = pricedata;
}




function getMenu() {
    let menu = 
            [
                {
                    name: 'Home',
                },
                {
                    name: 'About Us',
                },
                {
                    name: 'Service',
                },
                {
                    name: 'Contact Us',
                }
            ]
    

    var menudata = "<ul>";
    for(container in menu){
        menudata += "<li>" + menu[container].name + "</li>"
    }

    menudata += "</ul>"    
    document.getElementById("menu").innerHTML = menudata;
}



window.onload = function(){
    getOutput();
    getMenu();
}


// let ram = "1 GB"
// let price = "1500"
// let result = " Ram" + ram + " price " + price;
// console.log(result)

