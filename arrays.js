console.log("hii");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

isOver = true;

let userChoice=Number(prompt("Enter you choice:"));
while (isOver) {
    if (userChoice===1 ){
        isOver=false
        console.log("over ok");
        
    }else{
        console.log("not ok infinite loop");
        
    }
    
}
