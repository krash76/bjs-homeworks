"use strict";

function getResult(a, b, c) {
  let x = [];
  let discr = b * b - 4 * a * c;
  if (discr > 0) {
    let x1 = - b + Math.sqrt(discr) / (2 * a);
    let x2 = - b - Math.sqrt(discr) / (2 * a);
    x = [x1, x2];
  }
  else if (discr == 0) {
    let x1 = - b / (2 * a);
    x = [x1]; 
  }
 return x;
}


function getAverageMark(marks) {
  let sum = 0;
  if (marks.length == 0) {
  return 0;
  } 
  else {
    if (marks.length > 5) {
    console.log("оценок больше 5ти");
    marks = marks.slice(0, 5);
    }
    for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
    }
  }  
  //let averageMark = sum / marks.length;
  return sum / marks.length;
}  


function askDrink(name, dateOfBirthday) {
  let fullYears = new Date().getFullYear() - dateOfBirthday.getFullYear();
  //в развернутом виде:
  //const birthdayYear = dateOfBirthday.getFullYear();
  //const today = new Date();
  //const todayYear = today.getFullYear();
  //let fullYears = todayYear - birthdayYear;
  
  if (fullYears >= 18) {
  return `Не желаете ли олд-фэшн, ${name}`;
  }
  else {
  return `Сожалею, ${name}, но я не могу продать вам алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
}
