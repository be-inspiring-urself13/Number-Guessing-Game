//Selecting Elements 
var input = document.getElementById("inputbox")
var result = document.getElementById("result")
var guesscount = document.getElementById("guesscount")
var noofguess = 3
//Generate Random Number 1 to 5
var randomnumber = Math.floor(Math.random()*10)+1 //1 to 10
if(randomnumber>5)
{
    randomnumber=randomnumber-5
}

//Event Handler Function
function checkthenumber()
{
    if(input.value == randomnumber)
    {
        alert("You Got it Right! Congratsz Dude")
        result.textContent = "Winner Winner Chicken Dinner!"
    }
    else{
        noofguess=noofguess-1
        if(noofguess == 0)
        {
            alert("Wrongly Guessed Buddy, No Worries Just Try Again!, Generated Random Number is : "+randomnumber)
        }
        guesscount.textContent = "Available Guesses : "+noofguess
        result.textContent = "You Lost Dude!"

    }
}
