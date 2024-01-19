console.log("Welcome to MyTicTacToe Game")

let audioTurn = new Audio("ting.mp3");
let music = new Audio("music.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

//function to change the turn
const changeTurn = ()=>{
    if(turn==="X") return "0";
    else return "X";
}

//functoin to check for win
const checkWin= ()=>{
    let boxtext = document.getElementsByClassName('box-text');
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]

    wins.forEach((e)=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!==""))
        {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover=true;
            gameOver.play();
            document.getElementsByClassName("img-box")[0].getElementsByTagName("img")[0].style.width="200px"
            document.querySelector(".line").style.width="20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
    let boxText = element.querySelector('.box-text');
    
    //console.log(boxText);
    element.addEventListener("click",(e)=>{
       if(boxText.innerText===''){
            boxText.innerText=turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover)
                document.querySelector('.info').innerText = "Turn for "+ turn; 
       } 
    })
})


//Onclick listener on reset button

reset.addEventListener("click",()=>{
    let boxtext= document.querySelectorAll('.box-text');
    Array.from(boxtext).forEach((element)=>{
        element.innerText="";
        
    });
    isgameover=false;
    turn='X';
    document.querySelector('.info').innerText = "Turn for "+ turn;
    document.getElementsByClassName("img-box")[0].getElementsByTagName("img")[0].style.width="0px"
    document.querySelector(".line").style.width="0";
})