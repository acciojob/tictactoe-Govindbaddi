//your JS code here. If required.
const formtag=document.querySelector(".form-tag")
const wholediv=document.getElementById("wholediv")
    const turnMessage=document.querySelector(".message")
 const containertag=document.getElementById("container")
formtag.addEventListener("submit",creatingbox)
let playerOneTurn=true
const  player1Selections=[]
        const player2Selections=[]
         const possibleWinnigCombinations=[//ROWS
                                        ['1','2','3'],
                                        ['4','5','6'],
                                    ['7','8','9'],
                                    //COLUMNS
                                    ['1','4','7'],
                                    ['2','5','8'],
                                    ['3','6','9'],
                                    //DIAGNOALS
                                    ['1','5','9'],
                                    ['3','5','7']
                                ]
       //for showing each turn message
       function showingEachTurn(e){
        //box is alreday clicked avoid clicking again
        if(e.target.innerText){
            return
        }
        if(playerOneTurn){
            e.target.innerText="x"
            turnMessage.innerText=`${localStorage.getItem("player2")}, you're up`
            player1Selections.push(e.target.id)
        }
        else{
             e.target.innerText="o"
             turnMessage.innerText=`${localStorage.getItem("player1")}, you're up`
              player2Selections.push(e.target.id)
        }
        playerOneTurn=!playerOneTurn
        console.log("will be  checking")
        if(player1Selections.length>=3 ||player2Selections.length>=3){
            checkingWinningStatus()
        }
       }
function checkingWinningStatus(){
        for(let combo of possibleWinnigCombinations){
           
            if(player1Selections.length>player2Selections.length){
                 let count=0
            for(var i=0;i<combo.length;i++){
                if(player1Selections.includes(combo[i])){
                    count++
                }
            }
            if(count==3){
                
                   turnMessage.innerText=`${localStorage.getItem("player1")} congratulations you won!`
               
              
               
            }
        }
        else{
            let count=0
            for(var i=0;i<combo.length;i++){
                if(player2Selections.includes(combo[i])){
                    count++
                }
            }
            if(count==3){
               
                   turnMessage.innerText=`${localStorage.getItem("player2")} congratulations you won!`
               
              
               
            } 
        }
        }
       }
    
function creatingbox(e){
        e.preventDefault()
        const player1Name=e.target[0].value
        const player2Name=e.target[1].value

        console.log(e.target,player1Name,player2Name,"box is created")
        localStorage.setItem("player1",player1Name)
        localStorage.setItem("player2",player2Name)
        
     formtag.classList.toggle("hide")
      wholediv.classList.toggle("hide")
      turnMessage.innerText=`${player1Name}, you're up`
      //containertag.append(frag)
    
    }
 function eachbox(i){
         const eachdiv=document.createElement("div")
         eachdiv.classList.add("eachbox")
         eachdiv.id=i
         console.log(i)
         eachdiv.addEventListener("click",showingEachTurn)
         //frag.append(eachdiv)
          containertag.append(eachdiv)
        }
  let row=1
  let column=1
       for(let i=1;i<=9;i++){
        const eachid=i
        if(i%3==0){
            row++
            column=0
        }
         eachbox(eachid)
         column++
       }
