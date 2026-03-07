// let st = "javascript";

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

// class CreatePencil {
//   constructor(name, company, price, color, bgcolor) {
//     this.name = name;
//     this.company = company;
//     this.price = price;
//     this.color = color;
//     this.bgcolor = bgcolor;
//   }

//   erase() {
//     document.querySelectorAll("h1").forEach((elem) => {
//       if (elem.style.color == this.color) {
//         elem.remove();
//       }
//     });
//   }

//   create(text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = this.color;
//     h1.style.backgroundColor = this.bgcolor;
//     document.body.appendChild(h1);
//   }
// }

// let p1 = new CreatePencil("natraj", "Nat", 12, "red", "black");

// let p2 = new CreatePencil("DOM", "DOMS", 8, "blue", "black");

// class User {
//   constructor(name, address, username, email, color) {
//     this.name = name;
//     this.address = address;
//     this.username = username;
//     this.email = email;
//     this.role = "user";
//     this.color = color;
//   }
//   write(text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = `${this.name}:${text}`;
//     h1.style.color = "green";
//     document.body.appendChild(h1);
//   }
// }

// class Admin extends User {
//   constructor(name, address, username, email, color) {
//     super(name, address, username, email, color);
//     this.role = "admin";
//   }
//   Remove() {
//     document.querySelectorAll("h1").forEach(function (elem) {
//       elem.remove();
//     });
//   }
// }
// let u1 = new User("Yuvraj", "Bhopal", "Yuv69", "yu@gmail.com", "manager");
// u1.write("Hey");


// //Object.create


// let coffee = {
//   color:"Dark",
//   drink:function(){
//     console.log("Drink drink drink");
    
//   }
// }

// let arrbaite = Object.create(coffee);

// arrbaite.taste = "bitter";
// arrbaite.drink();
// console.log(arrbaite);


const m1 = {
  fname:"Yuvraj",
  lname:"Singh",
  getFullname(){
    return `${this.fname} ${this.lname}`
  }
}

const m2 = Object.create(m1);

console.log(m2.fname);
