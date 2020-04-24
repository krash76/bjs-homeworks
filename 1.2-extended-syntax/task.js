"use strict";

let a, b, c;
function getResult(a, b, c) {
  let discr = b * b - 4 * a * c;
  if (discr > 0) {
    var x1 = - b + Math.sqrt(discr) / (2 * a);
    var x2 = - b - Math.sqrt(discr) / (2 * a);
    var x = [x1, x2];
  }
  else if (discr = 0) {
    var x1 = - b / (2 * a);
    var x = [x1]; 
  }
  else {
    var x = [];
  };
   
 return x;
}


let marks = [];
let sum = 0;
function getAverageMark(marks) {
  if (marks.length > 0 && marks.length <= 5) {
    for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
    }
    var averageMark = sum / marks.length;
    return averageMark;
  } 
  else if (marks.length > 5) {
    console.log("оценок больше 5ти");
    for (let i = 0; i < 5; i++) {
    sum = sum + marks[i];
    }
    var averageMark = sum / 5;
    return averageMark;
  }
  else {
    return 0;
  }
}  


let name, dateOfBirthday;

function askDrink(name, dateOfBirthday) {
  var birthdayMonth = dateOfBirthday.getMonth();
  var birthdayYear = dateOfBirthday.getFullYear();
  const today = new Date();
  var todayMonth = today.getMonth(); 
  var todayYear = today.getFullYear();

  if (todayMonth >= birthdayMonth) {
  var fullYears = todayYear - birthdayYear;
  }
  else {
  var fullYears = todayYear - birthdayYear - 1;
  }

  if (fullYears >= 18) {
  alert(`Не желаете ли олд-фэшн, ${name}`)
  }
  else {
  alert(`Сожалею, ${name}, но я не могу продать вам алкоголь. Зато могу предложить вам замечательный клюквенный компот!`)
  }

  return result;
}
