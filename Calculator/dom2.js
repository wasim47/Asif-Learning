// function sum(){
//     var x = document.getElementById("num1").value;
//     var y = document.getElementById("num2").value;
//     document.getElementById("result").value = parseInt(x) + parseInt(y);
// }
// function sub(){
//     var x = document.getElementById("num1").value;
//     var y = document.getElementById("num2").value;
//     document.getElementById("result").value = parseInt(x) - parseInt(y);
// }
// function mul(){
//     var x = document.getElementById("num1").value;
//     var y = document.getElementById("num2").value;
//     document.getElementById("result").value = parseInt(x) * parseInt(y);
// }
// function div(){
//     var x = document.getElementById("num1").value;
//     var y = document.getElementById("num2").value;
//     document.getElementById("result").value = parseInt(x) / parseInt(y);

// }


function calculator(sign){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;

    if (sign == '+'){
        var result = parseInt(x) + parseInt(y);
    }
    else if (sign == '-'){
        var result = parseInt(x) - parseInt(y); 
    }
    else if (sign == '*'){
        var result = parseInt(x) * parseInt(y);
    }
    else if (sign == '/'){
        var result = parseInt(x) / parseInt(y);
    }
    else{
        var result= 'No Operator'
    }
    document.getElementById("result").value=result;

}

