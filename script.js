console.log("Welcome to tic tac toe")
let music = new Audio("Ting Ting Sound Notification.mp3")
let audioTurn = new Audio("mixkit-air-zoom-vacuum-2608.wav")
let gameover = new Audio("")
let turn = "X"
let isgameover=false;

const changeTurn = () => {

    return turn === "X" ? "0" : "X"
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText) === (boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.Info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
            // document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    
    })

}

music.play()
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn;
            }
            
        }
    })
})
reset.addEventListener('click', (e)=>{
    let boxtext = document.querySelectorAll('.boxtext')
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    })
    turn="X"
    isgameover=false;
    document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
    
})