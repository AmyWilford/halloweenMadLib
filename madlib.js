let storyInput = document.querySelector('#storyInput');
let storyOutput = document.querySelector('#storyOutput');
let warning = document.querySelector('#warning');
let numberWarning = document.querySelector('#numberWarning');
let creature;


let myName= document.querySelector('#myName');
let myCostume = document.querySelector('#myCostume');
let familyMember = document.querySelector('#familyMember');
let familyCostume = document.querySelector('#familyCostume');
let qty = document.querySelector('#qty')

let theStory = document.querySelector('#theStory')

let submit = document.querySelector('#submit');
submit.addEventListener("click", writeStory, false);

document.querySelector('#myName').focus();
window.addEventListener('keydown', keydownHandler, false);


const again = document.querySelector('#again');
again.addEventListener('click', resetPage, false);

 storyInput.className= "displayBlock";
 storyOutput.className = "displayNone";
 warning.className = "displayNone";
 numberWarning.className="displayNone";

 myName.focus(); 

function checkComplete() {
    if(myName.value =='' || myCostume.value== '' || familyMember.value =='' || familyCostume.value =='' || qty.value ==''){
        warning.className = 'displayBlock';
        return false
    } else if (qty.value > 5 || qty.value < 0) {
        numberWarning.className='displayBlock';
        return false
    } else {
        return true;
    }
    // this function needs to return true or false to make sure that it can be used in the writeStory function which is checking for a boolean value
}


//  function to create write story with inputted answers
function writeStory(){
    if(checkComplete() === false) {
        return 
    }
    let finishedStory = '';
    finishedStory+= 'Tonight is the night when all of the <span class="spookyValue">spooky Monsters </span>come out to play. <br>My name is <span class="specialValue">' + myName.value + ' </span> and this year I am going trick-or-treating dressed as a <span class="specialValue">' + myCostume.value + '</span>. <span class="specialValue">' + familyMember.value + ' </span> is going with me, dressed as a <span class="specialValue">' + familyCostume.value + '</span>. <br>I hope we see <span class="spookyValue">' + qty.value + ' ' + pickCreature(qty.value) + ' </span> tonight. <br>If we do - I will wish them a <br><span id="halloweenValue">HAPPY HALLOWEEN!</span>'
    theStory.innerHTML = finishedStory;
    storyInput.className= "displayNone";
    storyOutput.className = "displayBlock";
    warning.className = "displayNone";
    numberWarning.className = "displayNone";
    body.style.backgroundColor = 'black';
};

function keydownHandler(event) {
    // asci keycodes - each key on keyboard has its own keycode
    if(event.keyCode === 13 && checkComplete()===true) {
        console.log('Enter key pressed');
        writeStory();

    }
 }

function pickCreature(num) {
    if (num === '1') {
        creature = 'wicked witch'
        document.querySelector('#image').src="./resources/witch.png";
    } else if (num === '2') {
        creature = 'tricky trolls'
        document.querySelector('#image').src="./resources/trolls.png";
    } else if (num ==='3') {
        creature = 'threatening pairs of eyes'
        document.querySelector('#image').src="./resources/eyes.png";
    } else if (num ==='4') {
        creature = 'fumbling frankensteins'
        document.querySelector('#image').src="./resources/frankensteins.png";
    } else if (num ==='5') {
        creature = 'fiendish ghouls'
        document.querySelector('#image').src="./resources/ghosts.png";
    } else {
        console.log('no monsters for you')
    }
    return creature;
    };


// a function to reset the page so the user can make a new story
function resetPage() {
    storyInput.className= "displayBlock";
    storyOutput.className = "displayNone";
    warning.className = "displayNone";
    numberWarning.className = "displayNone";
    body.style.backgroundColor = 'white';
    body.style.color = '#26003b';

    myName.value = '';
    myCostume.value = '';
    familyMember.value = '';
    familyCostume.value = '';
    qty.value = '';

    theStory.innerHTML = '';

    myName.focus();
}