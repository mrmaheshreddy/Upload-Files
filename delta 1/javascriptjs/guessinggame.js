const maxi=prompt("enter the max number")


const random=Math.floor(Math.random()* maxi)+1;

let guess=prompt("guess the number")

while(true){
    if(guess=="quit"){
        console.log("quitting......")
        break;
    }

    if(guess == random){
        console.log("you are right", random)
        break;
    }
    else if(guess<random){
        guess=prompt("your guess was too small try agian")    
    }
    else{
        guess=prompt("your guess was too large try agin")
    }
}