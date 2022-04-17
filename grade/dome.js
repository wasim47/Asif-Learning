

    

function convert() {
    const numericGrade = document.getElementById('numericGrade').value;
    const gradeDisplay = document.getElementById('gradeDisplay');

   const numeric = parseInt(numericGrade);
   let grade, color = 'blue', message = 'Your grade is ';

   if (numeric >= 80){
    grade = 'A+';
    color = 'green';
    message = 'Great! your grade is ';
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
       color = 'red';
       message = 'Sorry! Your fail with grade of  ';
   }

   gradeDisplay.style.color = color;
   gradeDisplay.innerHTML = message + grade;
   
}
