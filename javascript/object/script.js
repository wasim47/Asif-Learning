//"use strict"

let a = 5;
let array = new Array("1","2","Array");
let arrays = ['1','2'];

let laptop = {
    monitor:"15.6 Inch",
    ram: "16GB",
    HDD : "512 SSD",
    software:{
        OS : "Mac Serra",
        office: "13",
        vscode: "15.8",
        window:{
            OS : "10",
            office: "10",
            vscode: "16"
        }
    }
}

/// For loop for array
for(let i=0; i <= array.length; i++){
    if(array[i]){
        //console.log(array[i])
    }
    else{
        //console.log("Not Index")
    }
    
}


// for(index in product){
//     console.log(index)    
// }

// /// For In for object
// for(index in laptop){
//     console.log(index)    
// }

// for(key in laptop.software){
//     console.log(key)
// }




function getOutput(){
    let product = {
        name : "Samsung",
        model : "Galaxy",
        price :[
            {
                ram : '16GB',
                amount: 15000.5,
            },
            {
                ram : '32GB',
                amount: 18000.5,
            },
            {
                ram : '64GB',
                amount: 25000.5,
            }        
        ]
    }

    document.getElementById("name").innerHTML = product.name;
    document.getElementById("model").innerHTML = product.model;


    var pricedata = "<table border='1' width='100%'>";
    for(key in product.price){ 
        pricedata += "<tr><td>" + product.price[key].ram + "</td><td>" + product.price[key].amount + "</td></tr>";    
    }
    pricedata += "</table>";

    document.getElementById("pricedata").innerHTML = pricedata;
}
window.onload = getOutput;


