function headerBtn() {
   document.querySelector('.js-trigger-btn').addEventListener('click', function() {
      this.classList.toggle('is-active');
      document.querySelector('.js-target-btn').classList.toggle('is-active');
   });
}

function aboutHoverTrigger() {
   const trigger = document.querySelectorAll(".js-about-trigger li a");
   const target = document.querySelectorAll(".js-about-target li");
   for (let i = 0; i < trigger.length; i++) {
      trigger[i].addEventListener("mouseover", function() {
         for (let j = 0;j < target.length; j++) {
            target[j].classList.remove("is-active");
         }
         target[i].classList.add("is-active");
      })
   }
}

window.addEventListener('DOMContentLoaded', function() {
   headerBtn();
   aboutHoverTrigger()
});