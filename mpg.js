var again = "y";
do {
  var miles = prompt("Enter miles driven");
  miles = parseFloat(miles);
  var gallons = prompt("Enter gallons of gas used");
  gallons = parseFloat(gallons);
  if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0)
  { 
    var mpg = miles / gallons;
    mpg = parseFloat(mpg).toFixed(2);
    alert("Miles per gallon = " + mpg);
  }
  else
  {
    alert("One or both entries are invalid");
  }
  again = prompt("Calculate new mileage?", "y");
}
while (again == "y");