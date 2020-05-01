"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
  let principal = amount - contribution;
  let today = new Date();
  let period;

  if (date.getFullYear() === today.getFullYear() && date.getMonth() > today.getMonth()) {
    period = date.getMonth() - today.getMonth();
    //console.log(period);
    }
  else if (date.getFullYear() > today.getFullYear()) {
    period = (date.getFullYear() - today.getFullYear() - 1)  * 12 + (12 - today.getMonth()) + (date.getMonth());
    //console.log(period, date.getFullYear(), today.getFullYear(), today.getMonth(), date.getMonth() );
  }
  else {
    alert("неверно введена дата окончания кредита");
  }

  let monthPercent = percent / 12 / 100;
  let coeff = monthPercent * (1 + monthPercent) ** period / ((1 + monthPercent) ** period - 1);
  let monthAmount = principal * coeff;
  let totalAmount = new Number(monthAmount * period).toFixed(2);
  console.log(totalAmount);

return totalAmount;
}



function getGreeting(name) {
  
  if (name == "" || name == "\"\"" || name == "null" || name == "underfined") {
    return `привет, мир! Меня зовут Аноним`;
  } else {
    return `Привет, мир! Меня зовут ${name}`;
  }
}