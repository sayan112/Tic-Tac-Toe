export default  class game {


constructor() {
console.log("hey there bro ");
 
this.turn = "X";
this.board= new Array(9).fill(null); 
// console.log(this.board);
// [null, null, null, null, null, null, null, null, null]
}

 nextTurn()
//   here if this.turn  is X then  next turn will be O 
{
     if(this.turn== "X")
     {
          this.turn="O" ; 

     }
     else{
          this.turn="X" ; 
     }
}
makeMove(i)
{
 this.board[i]=this.turn;
}



}