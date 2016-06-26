//uses the Claim constructor to create ten claim variables total; five were provided, five were created
var claim1 = new Claim("John Doe", "Specialist", 1100);

var claim2 = new Claim("Jane Doe", "Optical", 100);

var claim3 = new Claim("Joe Johnson", "Emergency", 31000);

var claim4 = new Claim("Sharon Smith", "Emergency", 1300);

var claim5 = new Claim("Steve Wright", "Primary Care", 770);

var claim6 = new Claim("Eeyore", "Emergency", 14300);

var claim7 = new Claim("Dillon Francis", "Optical", 560);

var claim8 = new Claim("Snoop Dogg", "Specialist", 400000);

var claim9 = new Claim("Snoop Lion", "Optical", 250000);

var claim10 = new Claim("Busta Rhymes", "Primary Care", 9500);

//provided array of first five claims
var initialList = [claim1, claim2, claim3, claim4, claim5];

//creates a second array with claims 6 through 10
var secondList = [claim6, claim7, claim8, claim9, claim10];

//initializes array to combine initialList and secondList
var claimsList = [];

//combines initialList and claimsList
for (var i = 0; i < 5; i++) {
  claimsList.push(initialList[i]);
}
for (var i = 0; i < 5; i++) {
  claimsList.push(secondList[i]);
}

//initializes totalPayedOut variable for use with the amountCovered array, to keep track of the total amount payed by the company for claims
var totalPayedOut = 0;

//the Claim constructor function
function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//function to determine percentage covered; returned values represent percentage covered for that visit type in decimal form
function percentageCovered(claim) {
  if (claim.visitType === "Optical") {
    return 0;
  } else if (claim.visitType === "Specialist") {
    return 0.1;
  } else if (claim.visitType === "Emergency") {
    return 1;
  } else if (claim.visitType === "Primary Care") {
    return 0.5;
  }
};

//function to determine amount covered per visitCost value
function amountCovered(array) {
  for (var i = 0; i < array.length; i++) {
    var cost = array[i].visitCost * percentageCovered(array[i]);
    cost = Math.round(cost); //rounds amount covered to the nearest whole number
    totalPayedOut += cost; //keeps track of total amount payed by company
    console.log("Paid out $" + cost + " for " + array[i].patientName + "\n"); //log amount paid out for patient in pretty print
  }
};

//call amountCovered function
amountCovered(claimsList);

//console.log entire amount paid out
console.log(totalPayedOut);
