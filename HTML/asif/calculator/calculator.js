function calculator(sign){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;

    if(sign == '+'){
        var result = parseInt(x) + parseInt(y);
    }
    else if(sign == '-'){
        var result = parseInt(x) - parseInt(y);
    }
    else if(sign == '*'){
        var result = parseInt(x) * parseInt(y);
    }
     else if(sign == '/'){
        var result = parseInt(x) / parseInt(y);
    }
    else{
        var result = 'No operator';
    }


    document.getElementById("result").value = result ;
}