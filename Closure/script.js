//toaster

function createToaster(config) {
  return function (str) {
    let div = document.createElement("div");
    div.textContent = str;
    div.className =
      " inline-block top-5 bg-cyan-500 text-black px-6 py-3 rounded shadow-lg pointer-events-none transition";

    document.querySelector(".parent").appendChild(div);
    setTimeout(() => {
        document.querySelector(".parent").removeChild(div);
    }, config.duration * 1000);
  };
}

let toaster = createToaster({
  positionX: "right",
  positionY: "top",
  theme: "dark",
  duration: 3,
});

toaster("Download Done");
