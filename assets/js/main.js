function headerBtn() {
   document.querySelector('.js-trigger-btn').addEventListener('click', function() {
      this.classList.toggle('is-active');
      document.querySelector('.js-target-btn').classList.toggle('is-active');
   });
}

function headerBtnDrop() {
   const dropTriggers = document.querySelectorAll(".js-header-drop-trigger");
   const dropTargets = document.querySelectorAll(".js-header-drop-target");

   dropTriggers.forEach((trigger, i) => {
      trigger.addEventListener("click", () => {
         trigger.classList.toggle("is-active");
         dropTargets[i].classList.toggle("is-active");
      });
   });
}

function headerMenuOverlay() {
   const overlayTrigger = document.querySelectorAll(".js-header-overlay-trigger");
   const overlayTarget = document.querySelector(".js-header-overlay-target");
   overlayTrigger.forEach((t) => {
      t.addEventListener("mouseover", () => {
         overlayTarget.classList.add("is-open");
      });
      t.addEventListener("mouseleave", () => {
         overlayTarget.classList.remove("is-open");
      });
   });
}

function headerScroll() {
   let lastScroll = 0;
   window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      const header = document.querySelector('.js-header-scroll');
      if (78 >= currentScroll) {
         header.classList.remove('is-scroll-down')
      } else if (currentScroll > lastScroll) {
         header.classList.add('is-scroll-down');
      } else if (currentScroll < lastScroll) {
         header.classList.remove('is-scroll-down');
      }
      lastScroll = currentScroll;
   });
}

function scrollSwipe() {
   const targets = document.querySelectorAll('.js-scroll-swipe');
   targets.forEach((t) => {
      ScrollTrigger.create({
         trigger: t,
         start: 'top 70%',
         onEnter: () => {
            t.classList.add('is-on')
         }
      })
   });
}

function scrollFadeInStagger() {
   gsap.from('.js-scroll-fade-in-stagger', 1,{
      y: 200,
      opacity: 0,
      ease: 'power1.out',
      stagger: 0.1,
      scrollTrigger: {
         trigger: '.js-scroll-fade-in-stagger',
         start: 'top 70%',
      }
   })
}

function scrollFadeIn() {
   gsap.utils.toArray('.js-scroll-fade-in').forEach(t => {
      gsap.from(t, 1,{
         y: 100,
         opacity: 0,
         ease: 'power1.out',
         scrollTrigger: {
            trigger: t,
            start: t.dataset.start || 'top 70%',
         }
      })
   })
}

function homeVisualSwiper() {
   const staffSwiper = new Swiper('.js-visual-swiper', {
      loop: true,
      slidesPerView: 1,
      effect: "fade",
      speed: 1500,
      autoplay: {
         delay: 6000,
      },
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
         renderBullet: function (index, className) {
            return `<span class="${className}"><span class="js-visual-swiper-bar p-visual__bar"></span></span>`;
         },
      },
      on: {
         init(staffSwiper) {
            staffSwiper.emit("slideChange");
         },
         slideChange(staffSwiper) {
            const bars = document.querySelectorAll('.js-visual-swiper-bar');
            bars.forEach((bar, i) => {
               bar.classList.remove('is-animating');
               if (i === staffSwiper.realIndex) {
                  void bar.offsetWidth;
                  bar.classList.add('is-animating');
               }
            });
         }
      }
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
      breakpoints: {
         768: {
            slidesPerView: 1.1,
            spaceBetween: 24,
         },
         1000: {
            slidesPerView: 'auto',
         }
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
   headerBtnDrop();
   headerScroll();
   homeVisualSwiper();
   scrollSwipe();
   scrollFadeInStagger();
   scrollFadeIn();
   aboutUsHover();
   homeStaffSwiper();
   serviceTab();
   dataCountUp();
   headerMenuOverlay();
});