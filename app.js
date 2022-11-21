const errorCaught = document.querySelector(".caught");
const notify = document.querySelector(".notify");
const email = document.querySelector("#emailad");
const regex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
notify.addEventListener("click", (e) => {
  if (email.value.match(regex)) {
    errorCaught.classList.add("none");
    return true;
  } else {
    errorCaught.classList.remove("none");
    console.log("invalid");
    return false;
  }
});
