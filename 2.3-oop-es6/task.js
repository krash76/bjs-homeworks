//Задачи 1,2 - функции в консоли выполняются, почему не проходит тестирование?

//obj = {name, attack, durability, range}
class Weapon {
  constructor(obj) {
    this.name = obj.name;
    this.attack = obj.attack;
    this.initialDurability =obj.durability;
    this.durability = obj.durability;
    this.range = obj.range;
  }
  takeDamage(damage) {
    return (this.durability > 0 ? this.durability -= damage : this.durability = 0);
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

class Arm extends Weapon {
  constructor() {
    super ({
      name:'Рука',
      attack: 1,
      durability: Infinity,
      range: 1,
    })
  }
}
const arm = new Arm ();
// arm.takeDamage(20);
// console.log (arm.name, arm.attack, arm.durability,arm.initialDurability, arm.range);
// console.log (arm.getDamage(), arm.isBroken());

class Bow extends Weapon {
  constructor() {
    super({
      name:'Лук',
      attack: 10,
      durability: 200,
      range: 3,
    })
  }
}
const bow = new Bow ();
// bow.takeDamage(20);
// console.log (bow.name, bow.attack, bow.initialDurability, bow.durability, bow.range);

class LongBow extends Bow {
  constructor(durability) {
    super(durability);
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
  }
}
const longBow = new LongBow ();
// console.log (longBow.name, longBow.attack, longBow.durability, longBow.range)


class Sword extends Weapon {
  constructor() {
    super({
      name: 'Меч',
      attack: 25,
      durability: 500,
      range: 1,
    })
  }
}
const sword = new Sword ();


class Axe extends Sword {
  constructor(range) {
    super(range);
    this.name = 'Секира'; 
    this.attack = 27; 
    this.durability = 800;
  }
}
const axe = new Axe ();
// console.log (axe.name, axe.attack, axe.durability, axe.range)

class Knife extends Weapon {
  constructor() {
    super({
      name: 'Нож',
      attack: 5,
      durability: 300,
      range: 1,
    })
  }
}
const knife = new Knife ();

class Staff extends Weapon {
  constructor() {
    super({
      name: 'Посох', 
      attack: 8, 
      durability: 300,
      range: 2, 
    })
  }
} 
const staff = new Staff ();

class StormStaff extends Staff {
  constructor(durability) {
    super(durability);
    this.name = 'Посох Бури'; 
    this.attack = 10; 
    this.range = 3;
  }
}
const stormStaff = new StormStaff();




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