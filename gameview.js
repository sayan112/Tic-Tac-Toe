export default  class game {

constructor(){
console.log("hey mother");
}

updateThegameboard(game)

{
     for(let i=0;i<game.board.length;i++)
     {
         const tile = document.querySelector(`.board-tile[data-index='${i}']`);
         console.log(tile);
         tile.textContent=game.board[i];
     }
}




}