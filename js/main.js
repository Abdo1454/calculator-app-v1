let mortgageAmount = document.getElementById("mortgage-amount");
let mortgageTerm = document.getElementById("mortgage-term");
let interestRate = document.getElementById("interest-rate");
// let loanTerm = document.getElementById("loan-term");
let repayment = document.getElementById("repayment");
let interestOnly = document.getElementById("interest-only");
let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");
let image = document.getElementById("imagee");
let img = document.getElementById("img");
let monthlyPayment;
let totalPayment;
let totalInterest;
function calculateMortgage() {
  if (
    mortgageAmount.value === "" ||
    mortgageTerm.value === "" ||
    interestRate.value === ""
  ) {
    alert("Please fill in all fields");
    return false;
  } else if (
    mortgageAmount.value <= 0 ||
    mortgageTerm.value <= 0 ||
    interestRate.value <= 0
  )
   {
    alert("Please enter positive values");
    return false;
  } else if (!repayment.checked && !interestOnly.checked) {
    alert("Please select a repayment option");
    return false;
  } else if (interestRate.value > 100) {
    alert("Please enter a valid interest rate");
    return false;
  } else {
    let n = mortgageTerm.value * 12;
    let r = interestRate.value / 100 / 12;
    let P = mortgageAmount.value;
    monthlyPayment = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    totalPayment = monthlyPayment * n;
    let roundMonthlyPayment = monthlyPayment.toFixed(2);
    let roundTotalPayment = totalPayment.toFixed(2);
    document.getElementById("monthly-payment").innerHTML = roundMonthlyPayment;
    document.getElementById("total-payment").innerHTML = roundTotalPayment;
    image.classList.add("hidden");
    img.classList.add("hidden");
    result.classList.remove("hidden");
    console.log(monthlyPayment);
    console.log(totalPayment);
  }
}
// calculateMortgage();
calculateBtn.addEventListener("click", calculateMortgage);
// إضافة منتج للكارت    