//var a = [5,6,7,8,9,4,1,5,6,3,5,8,7,9,6];

var b = 6;
//console.log(a[14]);

// for(var k = 0; k <= a.length; k++){
//     if(a[k]){
//         //console.log(a[k]);
//     }    
// }




function getArray(){
     var name = document.getElementById('name').value;
     var email = document.getElementById('email').value;
     var mobile = document.getElementById('mobile').value;

     let object =  {'name':name,'email': email,'mobile':mobile};
     console.log(object.mobile);
}