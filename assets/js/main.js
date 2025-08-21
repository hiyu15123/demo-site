function headerBtn() {
   document.querySelector('.js-trigger-btn').addEventListener('click', function() {
      this.classList.toggle('is-active');
      document.querySelector('.js-target-btn').classList.toggle('is-active');
   });
}

function aboutUsHover() {
   const aboutUsHoverTrigger = document.querySelectorAll(".js-about-trigger li a");
   const aboutUsHoverTarget = document.querySelectorAll(".js-about-target li");
   aboutUsHoverTrigger.forEach((item, i) => {
      item.addEventListener('mouseover', () => {
         aboutUsHoverTrigger.forEach(i => i.classList.remove('is-active'));
         aboutUsHoverTarget.forEach(t => t.classList.remove('is-active'));
         item.classList.add('is-active');
         aboutUsHoverTarget[i].classList.add('is-active');
      });
   });
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
   const serviceTabTrigger = document.querySelectorAll(".js-service-trigger li");
   const serviceTabTarget = document.querySelectorAll(".js-service-target > *");

   serviceTabTrigger.forEach((tab, i) => {
      tab.addEventListener('click', () => {
         serviceTabTrigger.forEach(t => t.classList.remove('is-active'));
         serviceTabTarget.forEach(c => c.classList.remove('is-active'));
         tab.classList.add('is-active');
         serviceTabTarget[i].classList.add('is-active');
      });
   });
}

function dataCountUp() {
   const countUpTrigger = document.querySelector(".js-data-trigger");
   const countUpTargets = document.querySelectorAll(".js-data-target");
   countUpTargets.forEach((target) => {
      const from = Number(target.dataset.from);
      const to = Number(target.dataset.to);
      const number = { count: from };
      gsap.to(number, {
         count: to,
         duration: 1,
         ease: 'none',
         scrollTrigger: {
            trigger: countUpTrigger,
            start: "top 60%",
         },
         onUpdate: () => {
            target.textContent = Math.floor(number.count).toLocaleString();
         },
      });
   });
}

window.addEventListener('DOMContentLoaded', function() {
   headerBtn();
   aboutUsHover();
   homeStaffSwiper();
   serviceTab();
   dataCountUp();
});