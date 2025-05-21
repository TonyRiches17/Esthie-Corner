const bookForm = document.querySelector(".book__form");

bookForm.addEventListener("click", (evt) => {
  evt.preventDefault();
  console.log("it worked");
  alert("Thank you for your booking an appointment. I will reach out to confirm as date approaches");
})