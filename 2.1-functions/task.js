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
  
function getAverageScore(data) {

  function getAverageMark() {
    let marksArray = [];
    for (let subject in data) {
    marksArray.push(data[subject]);
    }
    for (let i = 0; i < marksArray.length; i++) {
      let sum = 0;
      let marksOfSubject = marksArray[i];
        for (let j = 0; j < marksOfSubject.length; j++) {
        sum = sum + marksOfSubject[j];
        }
      let averageOfSubject = sum / marksOfSubject.length;
      marksArray[i] = averageOfSubject;
    }
  return (marksArray);
  }

let averageArray = getAverageMark();

let sumOfAverage = 0;
  for (let i = 0; i < averageArray.length; i++) {
    sumOfAverage += averageArray[i]; 
    for (let prop in data) {
      data[prop] = averageArray[i]; //почему здесь на выходе значение у всех свойств(предметов) = 4, вместо средних из averageArray???
    }
  let average = sumOfAverage / averageArray.length;
  data['average'] = average;
  }
return data
}

console.log (getAverageScore({
  algebra : [2, 4, 5, 2, 3, 4],
  geometry : [2, 4, 5],
  russian : [3, 3, 4, 5],
  physics : [5, 5],
  music : [2, 2, 6],
  english : [4, 4, 3],
  poetry : [5, 3, 4],
  chemistry : [2],
  french : [4, 4]
  }))




  //Задача_2_// длинный код
// function getAverageScore(data) {
 
//     let sumAlgebra = 0, 
//     sumGeometry = 0, 
//     sumRussian = 0,
//     sumPhysics = 0,
//     sumMusic = 0,
//     sumEnglish = 0, 
//     sumPoetry = 0,
//     sumChemistry = 0,
//     sumFrench = 0;

//     for (i= 0; i < data.algebra.length; i++) {
//       sumAlgebra += data.algebra[i];
//       averageAlgebra = sumAlgebra / data.algebra.length;
//     }
//     for (i= 0; i < data.geometry.length; i++) {
//       sumGeometry += data.geometry[i];
//       averageGeometry = sumGeometry / data.geometry.length;
//     }
//     for (i= 0; i < data.russian.length; i++) {
//       sumRussian += data.russian[i];
//       averageRussian = sumRussian / data.russian.length;
//     }
//     for (i= 0; i < data.physics.length; i++) {
//       sumPhysics += data.physics[i];
//       averagePhysics = sumPhysics / data.physics.length;
//     }
//    for (i= 0; i < data.music.length; i++) {
//       sumMusic += data.music[i];
//       averageMusic = sumMusic / data.music.length;
//     }
//     for (i= 0; i < data.english.length; i++) {
//       sumEnglish += data.english[i];
//       averageEnglish = sumEnglish / data.english.length;
//     }  
//     for (i= 0; i < data.poetry.length; i++) {
//       sumPoetry += data.poetry[i];
//       averagePoetry = sumPoetry / data.poetry.length;
//     }
//     for (i= 0; i < data.chemistry.length; i++) {
//       sumChemistry += data.chemistry[i];
//       averageChemistry = sumChemistry / data.chemistry.length;
//     }
//     for (i= 0; i < data.french.length; i++) {
//       sumFrench += data.french[i];
//       averageFrench = sumFrench / data.french.length;
//     }
    
    
//   return ({
//   algebra : averageAlgebra,
//   geometry : averageGeometry,
//   russian : averageRussian,
//   physics : averagePhysics,
//   music : averageMusic,
//   english : averageEnglish,
//   poetry : averagePoetry,
//   chemistry : averageChemistry,
//   french : averageFrench,
//   average : (averageAlgebra + averageGeometry + averageRussian + averagePhysics +  averageMusic + averageEnglish + averagePoetry + averageChemistry + averageFrench) / 9
//   })
// }



