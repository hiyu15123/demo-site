function triggerBtn() {
   document.querySelector('.js-trigger-btn').addEventListener('click', function() {
      this.classList.toggle('is-active');
      document.querySelector('.js-target-btn').classList.toggle('is-active');
   });
}



window.addEventListener('DOMContentLoaded', function() {
   triggerBtn();
});