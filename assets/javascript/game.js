 // On Page Load:
 // $(document).ready(function () {

        // Create variables (and set them to default values):
        var computerRandomNumber;
        var crystalOneValue, crystalTwoValue, crystalThreeValue, crystalFourValue;
        var wins = 0;
		var losses = 0;
		var userTotalScore = 0;
        // Call reset function
        reset();
		// Call update items on the page function
		updateItems();

	//Functions for variables and write them out in HTML. Reset function at end.
	function updateWins() {
		$("#winBox").html("Wins: " + wins);
	};

	function updateLosses() {
		$("#lossBox").html("Losses: " + losses);
	};

	function updateSum () {
		$("#sumBox").html(computerRandomNumber);	
	};

	function updateScore () {
		$("#scoreBox").html(userTotalScore);
	};

	function updateItems () {
		updateWins();
		updateLosses();
		updateSum();
		updateScore();
	};

	function reset () {
		//computer picks randome number b/w 19-120
		computerRandomNumber = Math.floor(Math.random() * 120) + 19;
		//random value for crystals b/w 1-12
		crystalOneValue = Math.floor(Math.random() * 12) + 1;
		crystalTwoValue = Math.floor(Math.random() * 12) + 1;
		crystalThreeValue = Math.floor(Math.random() * 12) + 1;
		crystalFourValue = Math.floor(Math.random() * 12) + 1;
		updateScore();
	};

    // On crystal click:
    // $(".crystal").on("click", 
    	function startGame() {
    		updateScore();
        // Figure out what crystal they clicked and store in a variable
        var crystalPressed = $(this).attr("value");

        // Add crystalClickedValue to userTotalScore
        if (crystalPressed == "crystal1") {
        	userTotalScore += crystalOneValue;
        } else if (crystalPressed == "crystal2") {
        	userTotalScore += crystalTwoValue;
        } else if (crystalPressed == "crystal3") {
        	userTotalScore += crystalThreeValue;
        } else if (crystalPressed == "crystal4") {
        	userTotalScore += crystalFourValue;
        }
        // Call update items on the page function
        updateItems();
        
        // if they win (userTotalScore === computerRandomNumber)
        if (userTotalScore === computerRandomNumber) {
            // Add 1 to wins
            wins++;
            // Call reset function
            reset();
			// Call update items on the page function
			updateItems();
		}
		
		// if they lose (userTotalScore > computerRandomNumber)
		if (userTotalScore > computerRandomNumber) {
			// Add 1 to losses
			losses++;
			// Call reset function
			reset();
			// Call update items on the page function
			updateItems();
		} 
	}

	$(document).on("click", ".crystal", startGame);
	// );
// });
