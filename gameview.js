export default  class game {

constructor(){
console.log("hey mother");
}

//  here we update the game board 


updateThegameboard(game)

{
    this.updateTurn(game);
     for(let i=0;i<game.board.length;i++)
     {
         const tile = document.querySelector(`.board-tile[data-index='${i}']`);
        //  console.log(tile);
        //  tile.textContent=game.board[i];
         let tileType= game.board[i]=='X' ? "title-x" : "title-o";
         tile.innerHTML=`<span class="${tileType}">${game.board[i]?game.board[i] :""}
         </span>`
        console.log(tileType);
     }
}



// updateturn
 


updateTurn(game)
{

    let playerX= document.querySelector(".player-x");
    let playerY= document.querySelector(".player-O");
    // console.log(playerX);
    // console.log(playerY);
    playerX.classList.remove("active");
    playerY.classList.remove("active");
//     for(let i=0;i<game.board.length;i++)
//     {
//         console.log(game.board[i]);
// ;
//     }
    // console.log(this.nextTurn); 
    if(game.turn =="X")

    {
        playerX.classList.add("active");
    }
    else{
        playerY.classList.add("active");

    }

}

}