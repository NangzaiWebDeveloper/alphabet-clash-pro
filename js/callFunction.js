//Start Button call by function
function start(){
    //1st step
    hideElementByID('home-screen')//press & add home screen

    hideElementByID('final-score')//after press 'play again' button, again start game
    //2nd step
    showElementByID('play-ground')//remove hidden & show play ground

    //reset score & life
    setTextElementById('reduce-score', 5)
    setTextElementById('current-score', 0)

    //3rd step
    continueGame()//(generate random alphabet) (insert the innerText) (add the bg color in keyboard button)
}

function gameOver(){
    hideElementByID('play-ground')
    showElementByID('final-score')

    //update final score
    //1. get the last-score
    const lastScore = getTextElementById('current-score')
    setTextElementById('last-score', lastScore)

    //clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-show-text')
    removeBgColorAlphabetById(currentAlphabet)
}



//user pressed key || get innerText form element || compare 'pressed key' & 'expected key'
function handleKeyboardButtonPress(event){
    const playerPressed = event.key;//player pressed "key"
    console.log('player pressed', playerPressed);

    if(playerPressed === 'Escape' || playerPressed === 'Enter'){
        gameOver();
    }

    //get the expected key
    const currentAlphabetElement = document.getElementById('current-show-text') //call element by ID
    const getElement = currentAlphabetElement.innerText //get innerText from element
    const expectedText = getElement.toLowerCase()//pressed key return a lowercase, that's hey expected latter make up lowercase

    //compare 'pressed key' & 'expected key'
    if(playerPressed === expectedText){
        //console.log('You have click correctly',expectedText);
        const currentScore = getTextElementById('current-score')
        //console.log(currentScore);
        const addedScore = currentScore + 1;
        setTextElementById('current-score', addedScore)


        //.............
        //{Update Score:---
        //1.get the update score,
        //const currentScoreElement = document.getElementById('current-score')
        //const showCurrentText = currentScoreElement.innerText
        //const currentScore = parseInt(showCurrentText)//convert string to number
        //console.log(stringToNumber);

        //2.increase the score 1,
        //const newScore = currentScore + 1;

        //3.show the update score,
        //currentScoreElement.innerText = newScore//insert to the 'span' element}

        //get a new round
        removeBgColorAlphabetById(expectedText);// remove alphabet bg color
        continueGame()//(generate random alphabet) (insert the innerText) (add the bg color in keyboard button)
    }
    else{
        const currentLife = getTextElementById('reduce-score')
        const reduceLife = currentLife - 1;
        setTextElementById('reduce-score', reduceLife)

        if(reduceLife === 0){
            gameOver()
        }
        //console.log(false);
        //step-1 get the current life number;
        //const reduceScoreElement = document.getElementById('reduce-score')
        //const scoreCurrentText = reduceScoreElement.innerText
        //const reduceScore = parseInt(scoreCurrentText)


        //step-2 reduce the life count;
        //const getReduceScore = reduceScore - 1;
        //step-3 display the updated life count;
        //reduceScoreElement.innerText = getReduceScore
    }

    console.log(playerPressed, getTextLower);
}

document.addEventListener('keyup', handleKeyboardButtonPress)//callBack function in keyboard
