function getOutput () {
    let product = {

        name: "samsung",
        model: "galaxy",
        price: [{
            ram: '16GB',
            amount : '15000.5',
        },
        {
            ram : '32GB',
            amount: '16500',
        },
        {
            ram : '64Gb',
            amount : '18500'
        }
    ]
    }
    document.getElementById("name").innerHTML= product.name;
    document.getElementById("model").innerHTML=product.model;
    var pricedata= "<table border='1' width='60%'>";
    pricedata +="<tr><th>ram</th><th>price</th></tr>"

    for(container in product.price){
        pricedata += "<tr><td>"+ product.price[container].ram + "</td><td>" + product.price[container].amount + "</td></tr>"
    }

    pricedata += "</table>"
    
    document.getElementById("pricedata").innerHTML = pricedata;
}

    function getManu(){
        let manu = [
            {
                name: 'Home'
            },
            {
                name: 'About'
            },
            {
                name: 'Contact us'
            },
            {
                name: 'Help'
            }
        ]
        var manudata = "<ul>"
        for (container in manu){
            manudata += "<li>"+ manu[container].name + "</la>"
        }
        manudata += "</ul>"
        document.getElementById("menu").innerHTML= manudata;

    }

    window.onload = function(){
        getOutput();
        getManu();
    }
