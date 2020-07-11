//AlarmClock = {alarmCollection, timerId};
//alarmCollection = [{time, id, callback}]; (id is alarm identification)
//timerId = setInterval identification;

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId;
  }

  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error ('id не найден');
    } else {
      if (this.alarmCollection.find((alarm) => (alarm.hasOwnProperty('id') === false || alarm.id === id ))) {
        console.error ('такой id уже существует (звонок существует)');
      } else {
        const alarmToCollect = {};
        alarmToCollect['time'] = time;
        alarmToCollect['callback'] = callback;
        alarmToCollect['id'] = id;
        this.alarmCollection.push(alarmToCollect);
      }
      return (console.log(this.alarmCollection)) ; 
    }
  }

  removeClock(id) {
   let controlId = this.alarmCollection.filter((alarm) => alarm.id !== id);
    if (controlId.length !== this.alarmCollection.length) {
      return (console.log ('звонок с данным id успешно удален') );
    } else {
      return (console.log ('звонков с данным id не найдено') )
    }
  }

  getCurrentFormattedTime() {
    let today = new Date();
    return (today.getHours() + ":" + today.getMinutes());
  }
  
  //  не могу checkClock написать корректно(((
  start() {

    this.alarmCollection.forEach((alarm) => { 
      function checkClock(alarm) { 
      if (this.getCurrentFormattedTime() === alarm.time) {
         alarm.callback();
       }
    }
  })
    
    if (this.timerId === undefined) {
      const controlAlarm = () =>  checkClock();
      this.timerId = setInterval(controlAlarm, 1000);
    } 
  }


  stop() {
    if (this.timerId !== undefined) {clearInterval(timerId);
    }
  }

  printAlarms() {
    this.alarmCollection.forEach((alarm) => {window.print('будильник № ${alarm.id} заведен на ${alarm.time}')});
  }

  clearAlarms() {
    clearInterval(timerId);
    this.alarmCollection.forEach(alarm => alarmCollection.shift(alarm));
  }
}



//function testCase() {
  let firstAlarm = new AlarmClock();
  //console.log(firstAlarm.getCurrentFormattedTime());
firstAlarm.addClock('21:23', () => console.log ("пора вставать",  ), 1);

firstAlarm.start();
// firstAlarm.addClock('16:34', () => { console.log ("Давай, вставай уже!"); firstAlarm.removeClock(2)}, 2);
// firstAlarm.addClock('16:34', () => console.log ("Иди умываться!"));
// firstAlarm.addClock('16:35', () => { console.log ("Вставай, а то проспишь!"); firstAlarm.clearalarms(); firstAlarm.printAlarms();}, 3);
// firstAlarm.addClock('16:36', () => console.log ("Вставай, а то проспишь!"), 1);
//firstAlarm.printAlarms();
//firstAlarm.start();
//}