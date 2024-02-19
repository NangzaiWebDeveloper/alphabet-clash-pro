//process-1
function hideElementByID(element){//press and hide element
    const homeScreen = document.getElementById(element)
    homeScreen.classList.add('hidden')
}
//process-2
function showElementByID(element){//show play ground
    const playGround = document.getElementById(element)
    playGround.classList.remove('hidden')
}
//process-3
function setBgColorAlphabetById(elementId){// add alphabet bg color
    const setBg = document.getElementById(elementId)
    setBg.classList.add('bg-green-700')
}
//process-4
function removeBgColorAlphabetById(elementId){// remove alphabet bg color
    const setBg = document.getElementById(elementId)
    setBg.classList.remove('bg-green-700')
}


//make Randomly generate a Alphabet functions
function getARandomAlphabet(){

    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'//String
    const getArray = alphabetString.split('')//string convert to array

    const randomArr = Math.random() * 25//generate random number
    const index = Math.round(randomArr)//convert integer number

    const randomAlphabet = getArray[index]//get only Alphabet
    return randomAlphabet;
}


//(generate random alphabet) (insert the innerText) (add the bg color in keyboard button)
function continueGame(){
    //1st-- generate a random alphabet
    const alphabet = getARandomAlphabet()

    //2nd-- call mutable tag & insert the innerText
    const currentText = document.getElementById('current-show-text')//ID call from randomly generate element
    currentText.innerText = alphabet//randomly generate alphabet show to the screen

    //3rd-- add background Color in Button
    setBgColorAlphabetById(alphabet)
}


//get the score value in number by element
function getTextElementById(elementId){
    const element = document.getElementById(elementId)
    const elementTextValue = element.innerText
    const value = parseInt(elementTextValue)//convert string to number
    return value;
}
function setTextElementById(elementId, value){
    const element = document.getElementById(elementId)
    element.innerText = value;//insert to the 'span' element
}

function getElementTextById(elementID){
    const element = document.getElementById(elementID)
    const text = element.innerText
    return text;
}
