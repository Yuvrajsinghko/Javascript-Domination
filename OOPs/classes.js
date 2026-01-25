let st = "javascript";

// function reverseString(str) {
//   let res = str.split("");

//   let final_result = [];

//   for (let index = res.length-1; index >= 0; index--) {
//     final_result.push(res[index]);
//   }
//   return final_result.join('')
// }

// let answer = reverseString(st);
// console.log(answer);

// function isPalindrome(str) {
//   // let test = str.split("").reverse().join("");

//   // return test === str;
// }
// console.log(isPalindrome("madam"));

// function isPalindrome(str) {
//   let test_string = str.split("");

// }

class CreatePencil {
  constructor(name, company, price, color, bgcolor) {
    this.name = name;
    this.company = company;
    this.price = price;
    this.color = color;
    this.bgcolor = bgcolor;
  }

  erase(){
    document.querySelectorAll("h1").forEach((elem)=>{
      if(elem.style.color==this.color){
        elem.remove();

      }

    })
  }

  create(text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    h1.style.backgroundColor = this.bgcolor;
    document.body.appendChild(h1);
  }
}

let p1 = new CreatePencil("natraj", "Nat", 12, "red", "black");

let p2 = new CreatePencil("DOM", "DOMS", 8, "blue", "black");
