document.addEventListener("DOMContentLoaded", function() {
    var readMoreBtn = document.querySelector(".read-more-btn");
    var hiddenText = document.querySelector(".about-text.hidden");
  
    readMoreBtn.addEventListener("click", function() {
      hiddenText.classList.toggle("hidden");
      if (readMoreBtn.textContent === "Read More") {
        readMoreBtn.textContent = "Read Less";
      } else {
        readMoreBtn.textContent = "Read More";
      }
    });
  });

function message(){
    alert("Thank you for contacting with us. We will get back to you soon.");
}