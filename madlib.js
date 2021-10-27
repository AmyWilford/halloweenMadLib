const storyInput = document.querySelector('#storyInput');
const storyOutput = document.querySelector('#storyOutput');
const warning = document.querySelector('#warning');

const verb = document.querySelector('#verb');
const myName= document.querySelector('#myName');
const myCostume = document.querySelector('#myCostume');
const familyMember = document.querySelector('#familyMember');
const familyCostume = document.querySelector('#familyCostume');
const qty = document.querySelector('#qty');
const creature = document.querySelector('#creature');

let theStory = document.querySelector('#theStory')

// const again = document.querySelector('#again');
// again.addEventListener('click', resetPage, false); //tbd what this means

let submit = document.querySelector('#submit');
submit.addEventListener("click", writeStory); //tbd what this means


// document.querySelector(#firstName).focus();
// window.addEventListener('keydown', keydownHandler, flase);

function writeStory() {
    let finishedStory = '';
    finishedStory+= 'Tonight is the night when all of the spooky Monsters come out to ' + verb.value + '. My name is ' + myName.value + " and this year I'm going trick-or-treating dressed as a" + myCostume.value + '. ' + familyMember.value + ' is going with me, dressed as a ' + familyCostume.value + '. '+ 'I hope we see ' + qty.value + ' ' + creature.value + ' tonight so I can tell them HAPPY HALLOWEEN!'

    theStory.innerHTML = finishedStory
};




// const resetPage = () =>