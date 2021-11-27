//  import game from "./game.js";
import game from "./game.js"
import gameview from "./gameview.js"
//  import gameview
let Game= new game();

//  ok so now its time to understand :)
//   at line no 4 , we create a variable Game , which calls a function new game  which triggers game.js , 


let Gameview= new gameview();
// Gameview.updateThegameboard(Game);
// // console.log("hello");
// console.log("My turn is", Game.turn);
// Game.nextTurn();
// //  through .nextrun we acutllay said that  now the next player  have the controle 
// console.log("My turn is", Game.turn);
// Game.makeMove(8);
// Game.nextTurn();
// Game.makeMove(1);
// Game.nextTurn();
// Game.makeMove(2);
// console.log(Game.board);
// Gameview.updateThegameboard(Game);

document.querySelector(".restart").addEventListener("click",()=>{
        onRestartClick();
    })


let tiles= document.querySelectorAll(".board-tile")
// console.log(tiles);
tiles.forEach((tile)=>
{
    tile.addEventListener("click",()=>{
        // console.log('tile clicked');
        onTileclick(tile.dataset.index);
    })
})



function onTileclick(i) {
    // we have to make a move first 
    Game.makeMove(i);

    Gameview.updateThegameboard(Game); 
    //  then it will update the board and next player can play now , its next turn

}
function  onRestartClick() {
    Game= new game();
    Gameview.updateThegameboard(Game);
}











//  song pupose 
var mysong = document.getElementById("playsong");
var icon = document.getElementById("icon");
console.log(icon);
 icon.onclick= function () {
    //  mysong.play();
    //  console.log(mysong);
     if (mysong.paused)
     {
         mysong.play();
         icon.src="./Sound webpage_img/pause.png";
     }
     else{
         mysong.pause();
         icon.src="./Sound webpage_img/play.png";

     }
 }