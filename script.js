let yourscore=0;
let compscore=0;

let choices=document.body.querySelectorAll(".choice")
let msg=document.body.querySelector(".move")

let yourscorepara = document.querySelector(".yourscore p:first-child");
let compscorepara = document.querySelector(".compscore p:first-child");


const WinGame=(userchoice,compchoice)=>{
    msg.innerText=`You win! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="Green"
}
const LoseGame=(userchoice,compchoice)=>{
    msg.innerText=`You lost.${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red"
}
const gencompchoice=()=>{
 const options=["Rock","Paper","Scissor"]
 const randidx=Math.floor(Math.random()*3)
 return options[randidx]
}
const DrawGame=()=>{
 msg.innerText="Draw.Play again"
 msg.style.backgroundColor="Pink"
};
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        yourscore++
        yourscorepara.innerText=yourscore
        WinGame(userchoice,compchoice)
    }else{
        compscore++
        compscorepara.innerText=compscore
        LoseGame(userchoice,compchoice)
    }
}
const playgame=(userchoice)=>{
const compchoice=gencompchoice();
console.log("computer choice",compchoice)
    
    if(userchoice===compchoice){
        console.log("Draw")
    DrawGame()
    return;
    }else{
        let userwin=true;
        if(userchoice==="Rock"){
            userwin=compchoice==="Paper"?false:true;
        }else if(userchoice==="Paper"){
            userwin=compchoice==="Scissor"?false:true;
        }
       else {
        userwin = compchoice === "Rock" ? false : true;
    }
        
     showwinner(userwin,userchoice,compchoice)
    }
};
    
    

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id")
        console.log("Userchoice",userchoice)
        playgame(userchoice)
    })
})

