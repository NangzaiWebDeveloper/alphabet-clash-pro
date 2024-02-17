function continueGame(){
    const alphabet = getARandomAlphabet()
    //console.log('Your random Alphabet', alphabet);

    const currentText = document.getElementById('current-show-text')
    currentText.innerText = alphabet
}

function start(){
    //home screen
    hideElementByID('home-screen')//1st step
    //play ground
    showElementByID('play-ground')//2nd step

    continueGame()//3rd step
}