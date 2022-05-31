function getOutput() {
    let product = {
        name: "samsung",
        model: "galaxy",
        price: [{
                ram: '4GB',
                amount: '15500'
            },
            {
                ram: '6GB',
                amount: '16500'
            },
            {
                ram: '8 GB',
                amount: '18500'
            }
        ]
    }

    document.getElementById("name").innerHTML = product.name;
    document.getElementById("model").innerHTML = product.model;

    var pricedata = "<table border= '1' width='100%'> ";
    pricedata += "<tr><th> ram </th><th> price </th></tr>";

    for (container in product.price) {
        pricedata += "<tr><td>" + product.price[container].ram + "</td><td>" + product.price[container].amount + "</td></tr>"
    }
    pricedata += "</table>"

    document.getElementById("pricedata").innerHTML = pricedata;



}



function getMenu() {
    let menu = [{
            name: 'Home',
        },
        {
            name: 'About',
        },
        {
            name: 'Service',
        },
        {
            name: 'Contact Us',
        },
        {
            name: 'Help'
        }

    ]

    var menudata = "<ul>";
    for (container in menu) {

        menudata += "<li>" + menu[container].name + "</li>"
    }
    menudata += "</ul>"
    document.getElementById("menu").innerHTML = menudata;


}





window.onload = function () {
    getOutput();
    getMenu();
}