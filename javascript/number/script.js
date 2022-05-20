
function forLoop(){
    var i, result, number;
    var operand = document.getElementById('operand').value;
   
    for(i = 1; i <= 10; i++){
        if(parseInt(operand) == 2){
            number = 2;
        }
        else if(parseInt(operand) == 3){
            number = 3;
        }
        else{
            number = 1;
        }        
        result  = number + ' x ' + i + ' = ' + number*i;
        document.write(result+"<br>");
    }

    getModulas();
}



function getModulas(){
    for(i = 1990; i <= 2022; i++){
        if(i%2 == 0){
            document.write(i + ' is even number'+"<br>");
        }
        else{
            document.write(i + ' is odd number'+"<br>");
        }
    }
}

