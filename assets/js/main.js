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
         for (let j = 0; j < target.length; j++) {
            target[j].classList.remove("is-active");
         }
         target[i].classList.add("is-active");
      })
   }
}

function homeStaffSwiper() {
   const staffSwiper = new Swiper('.js-staff-swiper', {
      loop: true,
      spaceBetween: 32,
      slidesPerView: 'auto',
      pagination: {
         el: '.swiper-pagination',
         type: 'fraction',
         renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass}"></span>
            <span class="p-staff__current-icon"></span>
            <span class="${totalClass}"></span>`
         }
      },
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   });
}

function serviceTab() {
   const trigger = document.querySelectorAll(".js-service-trigger li");
   const target = document.querySelectorAll(".js-service-target > *");
   for (let i = 0; i < trigger.length; i++) {
      trigger[i].addEventListener("click", function() {
         for (let j = 0; j < trigger.length; j++) {
            trigger[j].classList.remove("is-active");
            target[j].classList.remove("is-active");
         }
         trigger[i].classList.add("is-active");
         target[i].classList.add("is-active");
      });
   };
}

window.addEventListener('DOMContentLoaded', function() {
   headerBtn();
   aboutHoverTrigger();
   homeStaffSwiper();
   serviceTab();
});