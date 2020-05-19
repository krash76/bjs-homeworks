
//---Задача_1---

function parseCount(count) {
  if (Number.parseInt(count) === NaN) {
    const parseError = new Error('Невалидное значение');
    throw parseError;
  } 
  return Number.parseInt(count);
} 

function validateCount(count) {
  try {
    let result = parseCount(count);
    typeof result === 'number';
    return result; 
  } 
  catch (parseError) {
    return parseError;
   }
}
 
//---Задача_2--- 

class Triangle {
  constructor(a, b, c) {
    this.a = a,
    this.b = b,
    this.c = c 
  
  if ((this.a + this.b) < this.c || 
    (this.b + this.c) < this.a ||
    (this.a + this.c) < this.b ) {
      const formError = new Error('Треугольник с такими сторонами не существует');
      throw formError;
    } 
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return area.toFixed(3);
  }
}

function getTriangle (a, b, c) {
  try {
    const triangle = new Triangle (a, b,c);
    return triangle;
  }
  catch(formError) {
    const triangle = new Triangle (a,b,c,);
    triangle.getArea() = 'Ошибка! Неправильный треугольник';
    triangle.getPerimeter() = 'Ошибка! Неправильный треугольник';
    return triangle;
    }
   
}


 
