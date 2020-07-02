function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {
  }
}

function sum(...args) {
  sleep(500);
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
    let findResult = memory.find((memoryElement) => 
      compareArrays(memoryElement.args, newMemoryElement.args));
      if (findResult !== undefined ) {
        return (console.log(findResult.result, 'РЕЗУЛЬТАТ БЕРЕТСЯ ИЗ ПАМЯТИ')); 
      } else {
      newMemoryElement['result'] = fn(...args);
      memory.push(newMemoryElement);
      if (memory.length > limit) {
        memory.shift();
      }
      return (console.log(newMemoryElement.result, 'ФУНКЦИЯ ВЫЗВАНА НЕ ИЗ ПАМЯТИ'));
    }
  }
}

function testCase(testFunction, counter) {
  const arrayArgs = ([ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ]);
  let argOfArgs = [...arrayArgs];
  console.time(counter);
  for (i = 0; i <= 10; i++) {
    argOfArgs.forEach(arg => testFunction.apply(null, arg));
  }
  return (console.timeEnd(counter));
}


//const mSum = memorize(sum, 10);
  // mSum(3,4,5)
  // mSum(1,2)
  // mSum(3,4,5)
  // mSum(1,3,2)
  // mSum(1,2)

testCase(sum, 'counter'); 
//counter: 27556мс(sleep ON),  counter: 1-3мс (sleep OFF), 
//testCase(mSum, 'counter');
//counter: 1505мс (sleep ON),  counter: 2-3мс (sleep OFF), 


 