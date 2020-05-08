//"use strict";

//---- Задача_1----//

function showSolutionsMessage(a, b, c) {

  function getSolutions(a, b, c) {
    let D = b * b - 4 * a * c;
    let root = Math.sqrt(D);
    let roots = [];
    
    if (D < 0) {
      return {D: D, roots: []};
    } 
    else if (D == 0) {
      let x1 = - b / (2 * a);
      return {D: D, roots: [x1]};
    }
    else {
      let x1 = (- b + root) / (2 * a); 
      let x2 = (- b - root) / (2 * a); 
      return {D: D, roots: [x1, x2]};
    }
  }

  let result = getSolutions(a, b, c);
  //console.log(result, result.roots.length);
  if (result.roots.length == 0 ) {
    rootsResult = 'Уравнение не имеет вещественных корней';
  }  
  else if (result.roots.length == 1 ) {
    rootsResult = `Уравнение имеет один корень X₁ = ${result.roots[0]}`;
  }
  else {
    rootsResult = `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ =  ${result.roots[1]}`;
  }

  return ( 
    console.log( 
      `Вычисляем корни квадратного уравнения: ${a}x² + ${b}x + ${c},
      Значение дискриминанта: ${b * b - 4 * a * c}, 
      ${rootsResult}`)
  )
 
}
 showSolutionsMessage(1, 2, 3);
 showSolutionsMessage(7, 20, -3);
 showSolutionsMessage(2, 4, 2);
 
//----Задача_3----// ПОЧЕМУ НЕ РАБОТАЕТ???

function getPersonData(secretData) {
  let aaa, bbb;
  secretData = {
    aaa,
    bbb
  };
     
  function getDecodedValue(secret) {
    let x = secretData.aaa;
    let y = secretData.bbb;
    secret = [x, y];
    
    if (secret[0] == 1)  {
       decodedX = "Эмильо";
    }
    else {
      decodedX = "Родриго";
    }
    if (secret[1] == 1)  {
      decodedY = "Эмильо";
    }
    else {
     decodedY = "Родриго";
    }
    let firstName = decodedX;
    let lastName = decodedY;
    let decoded = {
      firstName ,
      lastName 
    };
   
  return decoded;
  }  
}
 console.log(getPersonData({
 aaa: 1,
 bbb: 1
})); 



 //----Задача_2----//

// function getAverageScore(data) {
  //let subjects = [];
  //let subject = subjects[i];
  // let marks = [];
    
  // data = {
    // subjects : marks
  // }

   
 
//  let sum = 0;
//   function getAverageMark(marks) {
//     for (let i = 0; i < marks.length; i++) {
//      sum = sum + subject.marks[i];
//      }
//      let averageMark = sum / marks.length;
//      return averageMark
//     }
//  }  
 //let arrayOfSubject = new Array [averageMark]; 

  // console.log(getAverageScore ({
  //   algebra : [2, 4, 5, 2, 3, 4],
  //   geometry : [2, 4, 5],
  //   russian : [3, 3, 4, 5],
  //   physics : [5, 5],
  //   music : [2, 2, 6],
  //   english : [4, 4, 3],
  //   poetry : [5, 3, 4],
  //   chemistry : [2],
  //   french : [4, 4]
  // }));
