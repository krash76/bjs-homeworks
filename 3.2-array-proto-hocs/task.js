function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {
  }
}

function sum(...args) {
  sleep(1800);
  return args.reduce((sum, arg) => {
  return sum += arg;}, 0)
}

function compareArrays(arr1, arr2) {
  return arr1.length == arr2.length && arr1.every((element, i) => element === arr2[i])
}

function memorize(fn, limit) {
  let memory = [];
  
  

  return function (...args) {
    let newMemoryElement = {};
    newMemoryElement['args'] = args;
   
    controlElement = (memoryElement) => {
      return compareArrays(memoryElement.args, newMemoryElement.args);
    }

    if (memory.find(controlElement) !== undefined) {
      //return (console.log (memoryElement.result, 'РЕЗУЛЬТАТ БЕРЕТСЯ ИЗ ПАМЯТИ')) 
      // почему при таком коде memoryElement.result = undefined?
      return (
        //console.log убрала для тестирования
         (newMemoryElement['result'] = fn(...args), 'РЕЗУЛЬТАТ БЕРЕТСЯ ИЗ ПАМЯТИ'));
    } else {
      newMemoryElement['result'] = fn(...args);
      memory.push(newMemoryElement);
      if (memory.length > limit) {
        memory.shift();
      }
      return (
        //console.log убрала для тестирования
        (memory, newMemoryElement.result, 'ФУНКЦИЯ ВЫЗВАНА НЕ ИЗ ПАМЯТИ'));
    }
  }
}

function testCase(testFunction, counter) {
  const arrayArgs = ([ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ]);
  let argOfArgs = [...arrayArgs];
  testFunction(...argOfArgs);
  console.time(counter);
  for (i = 0; i <= 10; i++) {
    arrayArgs.forEach(arg => testFunction(arg));
  }
  return (console.timeEnd(counter));
}


const mSum = memorize(sum, 5);
  // mSum(3,4,5)
  // mSum(1,2)
  // mSum(3,4,5)
  // mSum(1,3,2)
testCase(sum, 'counter'); 
//counter: 99058мс (sleep ON),  counter: 99057мс (sleep OFF), 
testCase(mSum, 'counter');
//counter: 99056мс (sleep ON),  counter: 99055мс (sleep OFF), 


//console.log(compareArrays([8, 1, 2], [8, 1, 2]));
//console.log(compareArrays([1, 2, 3], [3, 2, 1]));
 