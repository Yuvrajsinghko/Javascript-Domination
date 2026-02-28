const URL = "https://jsonplaceholder.typicode.com/comments";
const para = document.querySelector(".content");
const button = document.querySelector(".btn").addEventListener("click", () => {
  getdata();
});

const getdata = async () => {
  console.log("Getting data ...");

  let response = await fetch(URL);
  let data = await response.json();
  data.map((val) => {
    let p = document.createElement("p");
    p.classList.add("content");
    p.innerText=val.body;
    document.body.append(p);
    
   
    
  });
 
};
