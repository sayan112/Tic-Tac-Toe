export default  class game {


constructor() {
console.log("hey there bro ");
 
this.turn = "X";
this.board= new Array(9).fill(null); 
// console.log(this.board);
// [null, null, null, null, null, null, null, null, null]
}

//  kiska turn hein dekhna parega baba 
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




//  make moves 




makeMove(i)
{

 if (this.endofgame())
 {
      return ;
 }

     if(this.board[i])
{
     return;
}
 this.board[i]=this.turn;
let winningcombination = this.findwinningcombinations();
console.log("this is winnng combination ",winningcombination);
//  after win there is no point of next turn 
 if (!winningcombination)
 {
      this.nextTurn();
 }
}

findwinningcombinations()
{
    const winningcombinations =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
    ]

     for(const combination of winningcombinations)
     {
          console.log(combination);
          const[a,b,c]=combination;
           if(this.board[a] && this.board[a]==this.board[b] && this.board[a]==this.board[c])
           {
                return combination;
           }
     }
     return null;
}
 

//  we have to check when the end of the game 
 endofgame() {
let winningcombination= this.findwinningcombinations();
 if (winningcombination)
 {
      return true ; 
 }
 else{
      return false ;
       
 }
 }



}