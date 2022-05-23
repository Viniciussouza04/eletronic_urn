// interface control
let yourVote = document.querySelector('.d-1-1 span');
let language = document.querySelector('.d-1-2 span');

let description = document.querySelector('.d-1-4');
let warning = document.querySelector('.d-2');
let side = document.querySelector('.d-1-right');
let numbers = document.querySelector('.d-1-3');


let currentStage = 0;
let number = '';

function startStage(){
    let numbersHTML = '';
    let stage = phases[currentStage];

    for(let i = 0; i<stage.numbers; i++){
        if(i === 0){
            numbersHTML += '<div class="numbers-vote blink"></div>';
        }else{
            numbersHTML += '<div class="numbers-vote"></div>';
        }
        
    }
    
    yourVote.style.display = 'none';
    language.innerHTML = stage.title;
    description.innerHTML = '';
    warning.style.display = 'none';
    side.innerHTML = '';
    numbers.innerHTML = numbersHTML;
}

function updateInterface(){
    alert('FINALIZOU O VOTO')
}


function clicked(n){
    let elNumber = document.querySelector('.numbers-vote.blink');
    if(elNumber != null){
        elNumber.innerHTML = n;
        number = `${number}${n}`;

        elNumber.classList.remove('blink');
        if(elNumber.nextElementSibling !== null){
            elNumber.nextElementSibling.classList.add('blink');
        }else{
            updateInterface();
        }
        
    }
}

function btnWhite(){
    alert('Cliclou jovem no BRANCO');
}

function btnCorrect(){
    alert('Cliclou jovem no CORRIGE');
}

function btnConfrim() {
    alert('Cliclou jovem no CONFRIMA');
}

startStage();