
//---Задача_1---

function parseCount(count) {
  const value = Number.parseInt(count);
  if (Number.isNaN(value) === true) {
    throw new Error('Невалидное значение');
  } 
  return value;
} 

function validateCount(count) {
  try {
    return parseCount(count);
  } 
  catch (Error) {
    return Error;
   }
}
 
//---Задача_2--- 

class Triangle {
  constructor(a, b, c) {
    this.a = a,
    this.b = b,
    this.c = c 
  
  if ((a + b) < c || 
    (b + c) < a ||
    (a + c) < b ) {
      throw new Error('Треугольник с такими сторонами не существует');
    } 
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const p = this.getPerimeter() / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return parseFloat(area.toFixed(3));
  }
}

function getTriangle (a, b, c) {
  try {
    return new Triangle (a, b, c);
  }
  catch(Error) {
    return {
      getPerimeter: function() {return "Ошибка! Неправильный треугольник"},
      getArea: function() {return "Ошибка! Неправильный треугольник"}
    }
  }
}


 
