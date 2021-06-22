'use strict';

let studentInfo = document.getElementById('student-Info');


// let table=document.createElement('table');


// function header(){
//     let thElement=document.createElement('th');
//     table.appendChild(thElement);

//     for(let i=0;i<2;i++){
//         let tdElement=document.createElement(td);
//         tdElement.appendChild()

//     }


// }



let allstudents = [];
let newCourse='';

function GradesTrackers(studentName, studentCourse) {
    this.studentName = studentName;
    

    this.studentCourse = studentCourse;
    this.randomGrade = [];

    allstudents.push(this);

}



GradesTrackers.prototype.randomGenerator = function () {


    this.randomGrade.push(Math.floor(Math.random() * 100));

}
GradesTrackers.randomGenerator();

let submitting = document.getElementsByClassName('course');


submit.addEventListener('submit', submitting);


function submitting(event) {


    let studentName = event.target.studentName.value;


    for (let i = 0; i < course.length; i++) {
        if (newCourse === event.target.id.math) {
            newCourse = event.target.id.math;
        }
        else if ( GradesTrackers.studentCourse === event.target.id.english) {
            newCourse= event.target.id.english;
        }
        else if (this.studentCourse === event.target.id.arabic) {
            newCourse = event.target.id.arabic;
        }
        else if ( GradesTrackers.studentCourse === event.target.id.art) {
            newCourse = event.target.id.art;
        }

        else {
            newCourse = event.target.id.science;
        }

    }


 new GradesTrackers(studentName,newCourse);




}






let studentTable = document.getElementById('Table');
GradesTrackers.prototype.studentTable = function () {


    let trElement = document.createElement('tr');
    studentTable.appendChild(trElement);

    for (let i = 0; i < allstudents.length; i++) {

        let tdElement = document.createElement('td');
        trElement.appendChild(tdElement);
        tdElement.textContent= this.allstudents[i];




    }





}




function updatingStorage(){
    let string=JSON.stringify(GradesTrackers.allstudents);

    localStorage.setItem('grades',string)
}

function gettingStorage(){
    getting=localStorage.getItem('grades');

    let parsed=JSON.parse(getting());

    if(parsed){
        for(let i=0;i<parsed.length;i++){
            new GradesTrackers(parsed[i].studentName,parsed[i].newCourse);


            GradesTrackers.randomGenerator();



        }
    }


}



// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }




// GradesTrackers.prototype.render=function(){




// }









