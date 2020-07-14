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
      return (this.alarmCollection) ; 
    }
  }

  removeClock(id) {
   let newAlarmCollection = this.alarmCollection.filter((alarm) => alarm.id !== id);
    if (newAlarmCollection.length !== this.alarmCollection.length) {
      this.alarmCollection = newAlarmCollection;
      return (console.log (true));
    } else {
      return (console.log (false))
    }
  }

  getCurrentFormattedTime() {
    let today = new Date();
    let currentHours;
    let currentMinutes;
    if (today.getHours() < 10) {
      currentHours = '0' + today.getHours()
    } else {
      currentHours = today.getHours();
    }
    if (today.getMinutes() < 10) {
      currentMinutes = '0' + today.getMinutes()
    } else {
      currentMinutes = today.getMinutes();
    }
    return (currentHours + ":" + currentMinutes);
  }
  
  start() {

    const checkClock = () => { 
      this.alarmCollection.forEach((alarm) => { 
        if (this.getCurrentFormattedTime() === alarm.time) {
          alarm.callback();
        }
      })
    }
        
    if (this.timerId === undefined) {
      const controlAlarm = () =>  checkClock();
      this.timerId = setInterval(controlAlarm, 1000);
    } 
  }

  stop() {
    if (this.timerId !== undefined) {clearInterval(this.timerId);
    }
  }

  printAlarms() {
    this.alarmCollection.forEach(alarm => (console.log(`будильник № ${alarm.id} заведен на ${alarm.time}`)));
  }

  clearAlarms() {
    clearInterval(this.timerId);
    this.alarmCollection.forEach(alarm => this.alarmCollection.shift(alarm));
  }
}

const testCase = () => {
  let firstAlarm = new AlarmClock();
  firstAlarm.addClock('12:05', () => console.log ("пора вставать"), 1);
  firstAlarm.addClock('12:06', () => { console.log ("Давай, вставай уже!"); firstAlarm.removeClock(2)}, 2);
  //firstAlarm.addClock('12:06', () => console.log ("Иди умываться!"));
  firstAlarm.addClock('12:07', () => { console.log ("Вставай, а то проспишь!"); firstAlarm.clearAlarms(); firstAlarm.printAlarms();}, 3);
  firstAlarm.addClock('12:08', () => console.log ("Вставай, а то проспишь!"), 1);
  firstAlarm.printAlarms();
  firstAlarm.start();
}

testCase();
