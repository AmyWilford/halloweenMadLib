let storyInput = document.querySelector('#storyInput');
let storyOutput = document.querySelector('#storyOutput');
let warning = document.querySelector('#warning');
let creature;


let myName= document.querySelector('#myName');
let myCostume = document.querySelector('#myCostume');
let familyMember = document.querySelector('#familyMember');
let familyCostume = document.querySelector('#familyCostume');
let qty = document.querySelector('#qty')

let theStory = document.querySelector('#theStory')

let submit = document.querySelector('#submit');
submit.addEventListener("click", writeStory);

document.querySelector('#myName').focus();
window.addEventListener('keydown', keydownHandler, false);

const again = document.querySelector('#again');
again.addEventListener('click', resetPage, false);

 //This is already displayblock by default  - but clariying now will make it easier in the future
 storyInput.className= "displayBlock";
 storyOutput.className = "displayNone";
 warning.className = "displayNone";

 myName.focus();

// function to make enter key submit answer 
 function keydownHandler(event) {
    // asci keycodes - each key on keyboard has its own keycode
    if(event.keyCode === 13) {
        console.log('Enter key pressed');
        writeStory()

        storyInput.className= "displayNone";
        storyOutput.className = "displayBlock";
        warning.className = "displayNone";
        body.style.backgroundColor = 'black';
        body.style.color = '#ffa963';
        };
}

function checkComplete() {
    //verify the user filled in the form
    if(myName.value =='' || myCostume.value== '' || familyMember.value =='' || familyCostume.value =='' || qty.value =='') {
        warning.className = 'displayBlock';
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
    finishedStory+= 'Tonight is the night when all of the spooky Monsters come out to play. <br>My name is ' + myName.value + " and this year I'm going trick-or-treating dressed as a " + myCostume.value + '. <br>' + familyMember.value + ' is going with me, dressed as a ' + familyCostume.value + '. '+ '<br>I hope we see ' + qty.value + '  ' + pickCreature(qty.value) + ' tonight so I can tell them HAPPY HALLOWEEN!'
    theStory.innerHTML = finishedStory
};

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
    body.style.backgroundColor = '#26003b';
    body.style.color = 'lavender';

    myName.value = '';
    myCostume.value = '';
    familyMember.value = '';
    familyCostume.value = '';
    qty.value = '';

    theStory.innerHTML = '';

    myName.focus();
}