

    
// const numericGrade = document.getElementById('numericGrade');
// const gradeDisplay = document.getElementById('gradeDisplay');
function convert() {
   const numeric = parseInt(numericGrade).value;
   let grade;
   if (numeric >= 80){
    grade = 'A+';
   }
   
   else if (numeric >= 70){
    grade = 'A';
   }
   
   else if (numeric >= 60){
    grade = 'A-';
   }
 
   else if (numeric >= 50){
    grade = 'B';
   }
  
   else if (numeric >= 40){
    grade = 'C';
   }
   
   else if (numeric >=33){
    grade = 'D';
   }
 
   else{
       grade ='F'
   }
   gradeDisplay.innerText = ('Your Letter grade');
   
}
