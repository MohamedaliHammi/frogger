const timeLeftDisplay = document.querySelector('#time-left');

const resultDisplay = document.querySelector('#result');

const startBtn = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');
const logLeft = document.querySelectorAll('.log-left');
const logRight = document.querySelectorAll('.log-right');
const carsLeft = document.querySelectorAll('.car-left');
const carsRight = document.querySelectorAll('.car-right');
let currentIndex = 76;
const gridWidth  = 9;
let timerId = null;


let currentTimer = 20;



let moveFrog = (e) =>{
    squares[currentIndex].classList.remove('frog');

    
    switch(e. key){
        case 'ArrowLeft':
           if(currentIndex % gridWidth !==0) currentIndex -= 1;
        //    console.log('ArrowLeft');
            break;
        case 'ArrowRight':
         if(currentIndex % gridWidth < gridWidth - 1) currentIndex += 1;  
        //  console.log('ArrowRight');
           break;
        case   'ArrowDown':
            if(currentIndex + gridWidth  < gridWidth * gridWidth) currentIndex += gridWidth;
            // console.log('ArrowDown');
            break;
        case 'ArrowUp':
            if(currentIndex - gridWidth >= 0) currentIndex -= gridWidth;
            // console.log('ArrowUp');
            break;    
    }    
    
 squares[currentIndex].classList.add('frog')   

}

document.addEventListener('keyup', moveFrog);



//*  moving logs
function moveLogLeft (logLeft){
    switch(true){
    case logLeft.classList.contains('l1'):
        logLeft.classList.remove('l1')
        logLeft.classList.add('l2')
        break;

        case logLeft.classList.contains('l2'):
        logLeft.classList.remove('l2')
        logLeft.classList.add('l3')
        break;

        case logLeft.classList.contains('l3'):
        logLeft.classList.remove('l3')
        logLeft.classList.add('l4')
        break;

        case logLeft.classList.contains('l4'):
        logLeft.classList.remove('l4')
        logLeft.classList.add('l5')
        break;

        case logLeft.classList.contains('l5'):
        logLeft.classList.remove('l5')
        logLeft.classList.add('l1')
        break;
    
    }
};

function autoMoveLogRight (logRight){
    switch(true){
    case logRight.classList.contains('l1'):
        logRight.classList.remove('l1')
        logRight.classList.add('l5')
        break;

        case logRight.classList.contains('l2'):
            logRight.classList.remove('l2')
            logRight.classList.add('l1')
        break;

        case logRight.classList.contains('l3'):
            logRight.classList.remove('l3')
            logRight.classList.add('l2')
        break;

        case logRight.classList.contains('l4'):
            logRight.classList.remove('l4')
            logRight.classList.add('l3')
        break;

        case logRight.classList.contains('l5'):
            logRight.classList.remove('l5')
            logRight.classList.add('l4')
        break;
    
    }
};

//* moving cars 

function moveCarLeft (carsLeft){
    switch(true){
    case carsLeft.classList.contains('c1'):
        carsLeft.classList.remove('c1')
        carsLeft.classList.add('c2')
        break;

        case carsLeft.classList.contains('c2'):
        carsLeft.classList.remove('c2')
        carsLeft.classList.add('c3')
        break;

        case carsLeft.classList.contains('c3'):
        carsLeft.classList.remove('c3')
        carsLeft.classList.add('c1')
        break;

    
    }
};


function moveCarRight (carsRight){
    switch(true){
    case carsRight.classList.contains('c1'):
        carsRight.classList.remove('c1')
        carsRight.classList.add('c2')
        break;

        case carsRight.classList.contains('c2'):
            carsRight.classList.remove('c2')
            carsRight.classList.add('c1')
        break;

        case carsRight.classList.contains('c2'):
            carsRight.classList.remove('c2')
            carsRight.classList.add('c1')
        break;

    }
};



function autoMoveElements (){
    currentTimer --;
    timeLeftDisplay.textContent = currentTimer;
    logLeft.forEach(logLeft => moveLogLeft (logLeft));
    logRight.forEach(logRight => autoMoveLogRight(logRight));
    carsLeft.forEach(carsLeft => moveCarLeft (carsLeft));
    carsRight.forEach(carsRight => moveCarRight (carsRight));

    lose();
    win();
}
let lose = () =>{
    if(
        squares[currentIndex].classList.contains('c1') ||
        squares[currentIndex].classList.contains('l4') ||
        squares[currentIndex].classList.contains('l5') 

    ){

        resultDisplay.textContent = `You lose`;
        clearInterval(timerId);
        squares[currentIndex].classList.remove('frog');
        document.removeEventListener('keyup');
}
}

let win = () =>{
    if(squares[currentIndex].classList.contains('ending-block')){
        resultDisplay.textContent = 'You win';
        clearInterval(timerId);
        document.removeEventListener('keyup');
    }
}




 setInterval(autoMoveElements, 1000);


