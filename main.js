//  import game from "./game.js";
import game from "./game.js"
import gameview from "./gameview.js"
//  import gameview
let Game= new game();
let Gameview= new gameview();
Gameview.updateThegameboard(Game);
// console.log("hello");
console.log("My turn is", Game.turn);
Game.nextTurn();
console.log("My turn is", Game.turn);
Game.makeMove(8);
Game.nextTurn();
Game.makeMove(1);
Game.nextTurn();
Game.makeMove(2);
console.log(Game.board);
Gameview.updateThegameboard(Game);


//  ok so now its time to understand :)
//   at line no 4 , we create a variable Game , which calls a function new game  which triggers game.js , 















//  song pupose 
var mysong = document.getElementById("playsong");
var icon = document.getElementById("icon");
console.log(icon);
 icon.onclick= function () {
     mysong.play();
     console.log(mysong);
 }