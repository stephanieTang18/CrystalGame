$(document).ready(function(){

    // Generating the target random number to win the game //
    var Random = Math.floor(Math.random()*101+19);
    var userTotal = 0;
     
    // Printing the random number onto the screen // 
    $('#randomNumber').text(Random);

    // Generating each random crystals number //
    var num1 = Math.floor(Math.random()*11+1);
    var num2 = Math.floor(Math.random()*11+1);
    var num3 = Math.floor(Math.random()*11+1);
    var num4 = Math.floor(Math.random()*11+1);

    // Setting the final numbers to zero // 
    var finalTotal = 0;
    var wins = 0;
    var losses = 0;

    // Printing the numbers to the screen //
    $('#numberOfWins').text(wins);
    $('#numberOfLosses').text(losses);
    $('#finalTotal').text(finalTotal);

    // Gem click function //
    $('#blue').on ("click",function(){
        userTotal = userTotal + num1;
        $("#finalTotal").text(userTotal);
        if (userTotal == Random) {
            winner ();
        }
        else if (userTotal > Random) {
            loser ();
        }
    });

    $('#green').on ("click",function(){
        userTotal = userTotal + num1;
        $("#finalTotal").text(userTotal);
        if (userTotal == Random) {
            winner ();
        }
        else if (userTotal > Random) {
            loser ();
        }
    });

    $('#red').on ("click",function(){
        userTotal = userTotal + num1;
        $("#finalTotal").text(userTotal);
        if (userTotal == Random) {
            winner ();
        }
        else if (userTotal > Random) {
            loser ();
        }
    });

    $('#yellow').on ("click",function(){
        userTotal = userTotal + num1;
        $("#finalTotal").text(userTotal);
        if (userTotal == Random) {
            winner ();
        }
        else if (userTotal > Random) {
            loser ();
        }
    });

    // Wins & losses //

    function winner(){
        alert("You won!");
        wins++;
        $('#numberOfWins').text(wins);
        reset();
    }

    function loser(){
        alert("You lose!");
        losses++;
        $('#numberOfLosses').text(losses);
        reset();
    }

    // Reset function //

    function reset(){
        Random = Math.floor(Math.random()*101+19);
        $('#randomNumber').text(Random);
        num1 = Math.floor (Math.random()*11+1);
        num2 = Math.floor (Math.random()*11+1);
        num3 = Math.floor (Math.random()*11+1);
        num4 = Math.floor (Math.random()*11+1);
        userTotal = 0;
        $("#finalTotal").text(userTotal);
    }
});