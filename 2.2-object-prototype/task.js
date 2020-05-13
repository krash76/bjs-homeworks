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
  const now = Date.now();
  birthday = Number(new Date(birthday));
  let diff = now - birthday;
  age = diff / (365.25 * 24 * 60 * 60 * 1000); 
  return ((age > 18) ? true : false)
}
