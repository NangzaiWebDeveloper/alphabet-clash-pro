//Start Button call by function
function start(){
    //1st step
    hideElementByID('home-screen')//press & add home screen

    //2nd step
    showElementByID('play-ground')//remove hidden & show play ground

    //3rd step
    continueGame()//(generate random alphabet) (insert the innerText) (add the bg color in keyboard button)
}



//user pressed key || get innerText form element || compare 'pressed key' & 'expected key'
function handleKeyboardButtonPress(event){
    const playerPressed = event.key;//player pressed "key"
    //console.log('player pressed', playerPressed);

    //get the expected key
    const currentAlphabetElement = document.getElementById('current-show-text') //call element by ID
    const getElement = currentAlphabetElement.innerText //get innerText from element
    const expectedText = getElement.toLowerCase()

    //compare 'pressed key' & 'expected key'
    if(playerPressed === expectedText){
        console.log('You have click correctly',expectedText);
        removeBgColorAlphabetById(expectedText);// remove alphabet bg color
        continueGame()//(generate random alphabet) (insert the innerText) (add the bg color in keyboard button)
    }
    else{
        console.log(false);
    }

    console.log(playerPressed, getTextLower);
}

document.addEventListener('keyup', handleKeyboardButtonPress)//callBack function in keyboard
