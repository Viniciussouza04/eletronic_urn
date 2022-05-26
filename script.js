// interface control
let yourVote = document.querySelector('.d-1-1 span');
let language = document.querySelector('.d-1-2 span');

let description = document.querySelector('.d-1-4');
let warning = document.querySelector('.d-2');
let side = document.querySelector('.d-1-right');
let numbers = document.querySelector('.d-1-3');

let currentStage = 0;
let numberTyped = '';
let white = false;

function startStage(){
    let numbersHTML = '';
    let stage = phases[currentStage];
    numberTyped = '';
    white = false;

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
    let stage = phases[currentStage];
    let candidate = stage.competitors.filter((item)=>{
        if(item.number === numberTyped){
            return true;
        }else{
            return false;
        }
    });

    if(candidate.length > 0){

        candidate = candidate[0];
        yourVote.style.display = 'block';
        description.innerHTML = `Nome: ${candidate.name}<br/>Criador: ${candidate.creator}<br/>Criação: ${candidate.creation}`;
        warning.style.display = 'block';
        

        let imgHTML = '';
        for(let i in candidate.img){
            imgHTML += `<div class="d-1-imgs"> <img src="img/${candidate.img[i].url}" alt=""></div>`;
        }
        side.innerHTML = imgHTML;
    } else {
        yourVote.style.display = 'block';
        warning.style.display = 'block';
        description.innerHTML = `<div class="big-warning blink">VOTO NULO<div>`;
    }

    console.log('Candidato ', candidate);


}


function clicked(n){
    let elNumber = document.querySelector('.numbers-vote.blink');
    if(elNumber != null){
        elNumber.innerHTML = n;
        numberTyped = `${numberTyped}${n}`;

        elNumber.classList.remove('blink');
        if(elNumber.nextElementSibling !== null){
            elNumber.nextElementSibling.classList.add('blink');
        }else{
            updateInterface();
        }
        
    }
}

function btnWhite(){
    numberTyped = '';
    white = true;

    yourVote.style.display = 'block';
    warning.style.display = 'block';
    numbers.innerHTML = '';
    description.innerHTML = `<div class="big-warning blink modeColor">VOTO EM BRANCO<div>`;
    side.innerHTML = '';
}

function btnCorrect(){
    startStage();
}

function btnConfrim() {
    let stage = phases[currentStage];

    let confirmedVote = false;
    
    if(white === true){
        confirmedVote = true;
        console.log('Confirmando como BRANCO...');
    }else if(numberTyped.length === stage.numbers){
        confirmedVote = true;
        console.log('Confirmando como '+ numberTyped);
    }

    if(confirmedVote){
        currentStage++;
        document.querySelector('.screen').innerHTML = `<div class="control-finish blink modeColor">FIM</div>`;
    }

}

startStage();
