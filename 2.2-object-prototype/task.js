function getAnimalSound(animal) {
  if (animal === undefined) {
    return null;
  }
  let sound = animal["sound"];
    return sound;
}


function getAverageMark(marks) {
  let sum = 0;
  let average;
    for (let i = 0; i < marks.length; i++) {
      sum += Number(marks[i]);
      average =  sum / marks.length;
    }
  
  return roundedAvarage = Math.round(average);
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}