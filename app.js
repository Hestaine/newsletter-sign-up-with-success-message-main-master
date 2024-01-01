let errorMessage = document.querySelector(".error_message");
let input = document.querySelector(".email_input");
let submitBtn = document.querySelector(".submit");
let mainPage = document.querySelector(".mainpage");
let successCard = document.querySelector(".success_card");
let dismissBtn = document.querySelector(".dismiss");
let confirmation = document.querySelector(".confirmation");

//sucess message
const success = () => {
  mainPage.classList.add("dont_display");
  mainPage.classList.remove("mainpage");
  successCard.classList.remove("dont_display");
  return true;
};

// reset input space
const reset = () => {
  errorMessage.innerHTML = " ";
  input.style.backgroundColor = "white";
  input.style.border = "1px solid hsl(231, 7%, 60%)";
  input.value = "";

  mainPage.classList.add("mainpage");
  mainPage.classList.remove("dont_display");
  successCard.classList.add("dont_display");

  submitBtn.removeEventListener("click", success);
};

//prevent enter key from refreshing the page and linking enter key to submit button
input.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    submitBtn.click();
  }
});

//funtion to validate email
function validate(e) {
  let reg = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)(.[a-z]+)$/;
  if (!input.value.match(reg)) {
    submitBtn.removeEventListener("click", success);

    errorMessage.innerHTML = "Valid email required";
    errorMessage.style.color = "red";

    input.style.border = "1px solid rgb(255, 0, 0, 0.7)";
    input.style.backgroundColor = "rgb(255, 192, 203, 0.3)";
    input.style.color = "red";

    return false;
  }

  errorMessage.innerHTML = "";
  input.style.backgroundColor = "white";
  input.style.border = " 1px solid green";
  input.style.color = "hsl(234, 29%, 20%)";

  //confirmation
  confirmation.innerHTML = ` A confirmation email has been sent to
     <strong>${input.value}</strong> Please open it and click the
     button inside to confirm your subscription.`;

  submitBtn.addEventListener("click", success);
  return true;
}

//dismiss button to reset
dismissBtn.addEventListener("click", reset);
