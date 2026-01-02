let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
  users: [],
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(userManager));
  },
  submitForm: function (e) {
    e.preventDefault();
    console.log("form submitted");
    this.addUser()
  },
  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });
    form.reset();
  },
  removeUser: function () {},
};

userManager.init();
