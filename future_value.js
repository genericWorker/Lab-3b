var futureValue;
    
// get user entries
var investment = prompt("Enter investment amount as xxxxx.xx", 10000);
investment = parseFloat(investment);
var rate = prompt("Enter interest rate as xx.x", 7.5);
rate = parseFloat(rate);
var years = prompt("Enter number of years", 10);
years = parseInt(years);

// calulate future value
futureValue = investment;
for (var i = 1; i <= years; i++ ) {
  futureValue = futureValue + (futureValue * rate / 100);
}