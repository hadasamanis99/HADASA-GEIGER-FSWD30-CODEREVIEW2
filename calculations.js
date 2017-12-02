var amsterdam = [1500, 500, 1800, 700];

var london = [2500, 1500, 1000, 900];

var amsterdamAvg = averageOfNumbers(amsterdam);

var londonAvg = averageOfNumbers(london);


function averageOfNumbers(arrayVar) {
    var retVal =0;
    for (var i = 0; i <= arrayVar.length - 1; i++) {
    	retVal = retVal + arrayVar[i];
    }
    return retVal/arrayVar.length;
}


function displayAvgAmsterdam() {
    document.getElementById("amsterdamDisp").innerHTML = amsterdamAvg;
}

function displayAvgLondon() {
   document.getElementById("londonDisp").innerHTML = londonAvg;
}

function displayDiff() {
   document.getElementById("pricediff").innerHTML = Math.abs(londonAvg-amsterdamAvg);
}

function displayWinnerAndLoser() {
   document.getElementById("whoIsMoreAffordable").innerHTML = "<strong>" + winnerAndLoser()[0] 
   + "</strong> will be more affordable than <strong>" + winnerAndLoser()[1] 
   + "</strong> for the New Year celebration.";
}

function winnerAndLoser () {
	var retVal = ["Amsterdam","London"];
	if (londonAvg < amsterdamAvg) {
		retVal= ["London","Amsterdam"];
	}
	return retVal;
}

function displayAllTheCalculations() {
	displayAvgAmsterdam();
	displayAvgLondon();
	displayWinnerAndLoser();
	displayDiff();
}
