//Задачи 1,2 - функции в консоли выполняются, почему не проходит тестирование?

class Weapon {
  constructor(obj) {
    this.name = obj.name;
    this.attack = obj.attack;
    this.initialDurability = obj.initialDurability;
    this.durability = obj.durability;
    this.range = obj.range;
  }
  takeDamage(damage) {
    return (this.durability > 0 ? this.durability -= 1 : this.durability = 0);
  }
  getDamage() {
    if (this.durability <= 0) {
      return this.attack = 0;
    }
    else if (this.durability >= (this.initialDurability * 0.3)) {
      return this.attack;
      } 
    return (this.attack = this.attack / 2)
  }
  isBroken() {
    return (this.durability > 0 ? false : true)
  }
}

const arm = new Weapon ({
  name: 'Рука', 
  attack: 1,
  initialDurability: Infinity,
  durability: Infinity, 
  range: 1, 
})

const knife = new Weapon ({
  name: 'Нож', 
  attack: 5, 
  initialDurability: 300,
  durability: 300,
  range: 1, 
});

class Bow extends Weapon {
  constructor(obj) {
    super(obj)
  }
}

class Sword extends Weapon {
  constructor(obj) {
    super(obj);
  }
}

class Staff extends Weapon {
  constructor(obj) {
    super(obj);
  }
} 

const bow = new Bow ({
  name: 'Лук', 
  attack: 10, 
  initialDurability: 200,
  durability: 200,
  range: 3, 
})

const longBow = new Bow ({
  name: 'Длинный лук', 
  attack: 15, 
  initialDurability: 200,
  durability: 200,
  range: 4, 
})

const sword = new Sword ({
  name: 'Меч', 
  attack: 25, 
  initialDurability: 500,
  durability: 500,
  range: 1, 
});

const axe = new Sword ({
  name: 'Секира', 
  attack: 27, 
  initialDurability: 800,
  durability: 800,
  range: 1, 
});

const staff = new Staff ({
  name: 'Посох', 
  attack: 8, 
  initialDurability: 300,
  durability: 300,
  range: 1, 
});

const stormStaff = new Staff ({
  name: 'Посох', 
  attack: 8, 
  initialDurability: 300,
  durability: 300,
  range: 1, 
});

//longBow.takeDamage(20);
// console.log (longBow.durability, longBow.getDamage(), longBow.isBroken());
// axe.takeDamage(400);
// console.log (axe.durability, axe.getDamage(), axe.isBroken());
// staff.takeDamage(100);
// console.log (staff.durability, staff.getDamage(), staff.isBroken());
// arm.takeDamage(20);
// console.log (arm.durability, arm.getDamage(), arm.isBroken());



//Задача 3 
// в правильном ли направлении двигаюсь? 
//И что сделать, чтобы register был единым, а не создавался каждый раз новый (((?

class StudentLog {
  constructor(name) {
    this.name = name;
  }

  getName () {
    return this.name;
  }

  addGrade(grade, subject) {
   
    if (typeof grade !== 'number' || grade < 1 || grade > 5) {
      return (console.log (`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`))
    } 
    const register = new Object();
      if (register[subject] !== subject) {
        register[subject] = [];
        register[subject].push(grade);
      }
      register[subject].push(grade);
      return (console.log (register));
  }
}    
    
const log = new StudentLog('Олег Никифоров');

console.log(log.getName());
log.addGrade(3, 'algebra');
log.addGrade(4, 'algebra');
// log.addGrade('отлично!', 'math');
//log.addGrade(5, 'geometry');
// log.addGrade(25, 'geometry');
// log.addGrade(3, 'geometry');


  

// console.log(log.addGrade(3, 'algebra'));
// console.log(log.addGrade(4, 'algebra'));
// console.log(log.addGrade('отлично!', 'math'));
// console.log(log.addGrade(5, 'geometry'));
// console.log(log.addGrade(25, 'geometry'));
// console.log(log.addGrade(3, 'geometry'));