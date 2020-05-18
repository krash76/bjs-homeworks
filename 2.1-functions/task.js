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
  let rootsResult;
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
 
//----Задача_3----// 

function getPersonData(secretData) {
  let decodedX = secretData.aaa ? 'Эмильо' : 'Родриго';
  let decodedY = secretData.bbb ? 'Эмильо' : 'Родриго';
    
  return {firstName: decodedX, lastName: decodedY}
}

 console.log(getPersonData({
 aaa: 0,
 bbb: 0
})); 


 //----Задача_2----// 

 function getAverageMark(marks) {
  let sum = 0;
  let averageMark;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
return (averageMark =  sum / marks.length)
}

function getAverageScore(data) {
  let marksArray = [];
  for (let subject in data) {
    marksArray.push(data[subject]);
    data[subject] = getAverageMark(data[subject]); 
    //значение свойства (subject) равно среднему значению, вычисляемому функцией getAverageMark, 
    //где аргументом являются массивы оценок по каждому предмету. Круто!!! )
  }
  data['average'] = getAverageMark(Object.values(data));
  //дополнительное свойство average получает среднее значение массива, состоящего из средних оценок по каждому предмету
  return (console.log(data))
}

getAverageScore({
  algebra : [2, 4, 5, 2, 3, 4],
  geometry : [2, 4, 5],
  russian : [3, 3, 4, 5],
  physics : [5, 5],
  music : [2, 2, 6],
  english : [4, 4, 3],
  poetry : [5, 3, 4],
  chemistry : [2],
  french : [4, 4]
  })



