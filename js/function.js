function hideElementByID(element){//press and hide element
    const homeScreen = document.getElementById(element)
    homeScreen.classList.add('hidden')
}
function showElementByID(element){//show play ground
    const playGround = document.getElementById(element)
    playGround.classList.remove('hidden')
}

//Alphabets functions
function getARandomAlphabet(){
    //get array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const getArray = alphabetString.split('')
    //console.log(getArray);

    const randomArr = Math.random() * 25//generate random number
    const index = Math.round(randomArr)//convert integer number
    //const alphabet = getArray[index]
    //return alphabet

    const randomAlphabet = getArray[index]
    //console.log(index,randomAlphabet);
    return randomAlphabet;
}