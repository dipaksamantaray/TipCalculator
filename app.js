let billAmount = document.getElementById("bill-amount");
let percentTip = document.getElementById("percentage-tip");
let tipAmount = document.getElementById("tip-amount");
let total = document.getElementById("Total");
let calculate = document.getElementById("calculate");

calculate.addEventListener("click", function () {
  billAmount = Number(billAmount.value);
  percentTip = Number(percentTip.value);

  if (isNaN(billAmount) || billAmount <= 0 || percentTip == null) {
    alert("plesae enter a valid Bill Amount ");
  } else if (isNaN(percentTip) || percentTip <= 0 || percentTip === null) {
    alert("please enter a valid Tip percentage");
  } else {
    let calculateTip = (percentTip / 100) * billAmount;
    tipAmount.value = `$` + calculateTip;
    let calculatedTotal = billAmount + calculateTip;
    total.value = `$` + calculatedTotal;
  }
});
