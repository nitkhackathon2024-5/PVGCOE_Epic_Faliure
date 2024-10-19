$(document).ready(function() {
  var swiper;
  function initSwiper() {
      gsap.set(".swiper-slide.temoignage-home:not(.swiper-slide-active)", {
          opacity: 0,
          y: 40,
      });
      gsap.set(".swiper-slide.temoignage-home.swiper-slide-active", {
          opacity: 0,
          y: 0,
      });
      swiper = new Swiper(".swiper.temoignage-home",{
          slidesPerView: "auto",
          centeredSlides: true,
          spaceBetween: 30,
          loop: true,
          grabCursor: true,
          breakpoints: {
              481: {
                  slidesPerView: "auto",
                  centeredSlides: true,
                  spaceBetween: 30,
                  loop: true,
              },
              0: {
                  slidesPerView: 1.1,
                  centeredSlides: false,
                  spaceBetween: 20,
                  loop: true,
              },
          },
          on: {
              init: function() {
                  applyReviewCardStyles();
                  showRelevantCards();
              },
          },
      });
  }
  function applyReviewCardStyles() {
      $(".card-review").each(function() {
          var $card = $(this);
          var source = $card.data("source");
          var className = "";
          switch (source) {
          case "linkedin":
              className = "linkedin";
              break;
          case "google":
              className = "google";
              break;
          case "13g":
              className = "treize-g";
              break;
          }
          if (className) {
              $card.addClass(className);
              $card.find(".content-review, .info-titre, .poste-review").addClass(className);
          }
          handleStarRating($card);
      });
  }
  function handleStarRating($card) {
      var $starWrapper = $card.find(".etoile-wrap");
      var starRating = parseInt($starWrapper.data("star"));
      if (starRating >= 1 && starRating <= 5) {
          $starWrapper.find(".etoile-1").each(function(index) {
              if (index < starRating) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
          });
      }
  }
  function showRelevantCards() {
      $(".card-review").hide();
      $(".card-review.linkedin, .card-review.google, .card-review.treize-g", ).show();
      if (swiper && typeof swiper.update === "function") {
          swiper.update();
      }
  }
  function animateSlides() {
      const slides = document.querySelectorAll(".swiper-slide.temoignage-home");
      slides.forEach( (slide) => {
          if (slide.classList.contains("swiper-slide-active")) {
              gsap.to(slide, {
                  opacity: 1,
                  y: 0,
                  duration: 1.2,
                  ease: "power2.out",
              });
          } else {
              gsap.to(slide, {
                  opacity: 1,
                  y: 40,
                  duration: 1.2,
                  ease: "power2.out",
              });
          }
      }
      );
  }
  function initScrollAnimation() {
      if (window.innerWidth > 767) {
          const firstCard = document.querySelector(".first-card");
          const contentReview = firstCard.querySelector(".content-review.is_first");
          const p = contentReview.querySelector("p");
          const texts = contentReview.querySelectorAll("*");
          const textSizeMedium = firstCard.querySelector(".text-size-medium.is_first", );
          const posteReview = firstCard.querySelector(".poste-review.is_first");
          const infoTitre = firstCard.querySelector(".info-titre");
          const starWrapper = firstCard.querySelector(".star-treize-g__wrapper");
          const tl = gsap.timeline({
              scrollTrigger: {
                  trigger: ".first-slide",
                  start: "top 10%",
                  end: "bottom top",
              },
          });
          tl.to(firstCard, {
              width: "34.72rem",
              height: "auto",
              minHeight: "12rem",
              borderRadius: "0.5rem",
              backgroundColor: "#2b2b2b",
              duration: 1.2,
              ease: "power2.inOut",
          }).to(p, {
              fontSize: "2vw",
              duration: 1,
              ease: "power1.inOut",
          }, "-=1.8", ).to(texts, {
              fontSize: "0.9rem",
              duration: 1,
              ease: "power1.inOut",
          }, "-=1.3", ).to(textSizeMedium, {
              fontSize: "1.67rem",
              duration: 1,
              ease: "power1.inOut",
          }, "-=1.3", ).to(posteReview, {
              fontSize: "0.9rem",
              duration: 1,
              ease: "power1.inOut",
          }, "-=1.3", ).to(starWrapper, {
              fontSize: "0.9rem",
              duration: 1,
              ease: "power1.inOut",
          }, "-=1.3", ).to(infoTitre, {
              opacity: 0,
              paddingLeft: "1.67rem",
              minWidth: "0",
              duration: 0.8,
              ease: "power1.inOut",
          }, 1, ).to(contentReview, {
              opacity: 0,
              duration: 0.8,
              ease: "power1.inOut",
          }, 1, ).to(".swiper-slide.temoignage-home.swiper-slide-active", {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.inOut",
          }, "-=0.5", ).to(firstCard, {
              opacity: 0,
              duration: 0.3,
              ease: "power1.inOut",
          }, "-=0.2", ).to(".swiper-slide.temoignage-home:not(.swiper-slide-active)", {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power2.out",
              stagger: 0.2,
          }, "-=0.3", );
      } else {
          gsap.set(".first-card", {
              display: "none"
          });
          gsap.set(".swiper-slide.temoignage-home", {
              opacity: 1,
              y: 0
          });
      }
  }
  initSwiper();
  initScrollAnimation();
  $(window).on("resize", function() {
      initScrollAnimation();
  });
});
function handleNavbarLogoOpacity() {
  const logo = document.querySelector('.navbar__logo');
  const scrollThreshold = 0.05;

  logo.style.transition = 'opacity 0.3s ease';

  window.addEventListener('scroll', () => {
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

      if (scrollPercentage >= scrollThreshold) {
          logo.style.opacity = '0';
      } else {
          logo.style.opacity = '1';
      }
  }
  );
}

document.addEventListener('DOMContentLoaded', handleNavbarLogoOpacity);

$(document).ready(function() {
  $(".button__contact__nav").hover(function() {
      gsap.to($(this).find(".fake-arrow-width"), {
          width: "100%",
          duration: 0.8,
          ease: "power2.inOut",
      });

      gsap.to(this, {
          paddingLeft: "1.11rem",
          paddingRight: "3.4rem",
          backgroundColor: "#8ddd8d",
          color: "#131313",
          duration: 0.8,
          ease: "power2.inOut",
      });

      gsap.to($(this).find(".icon-arrow-green-block"), {
          backgroundColor: "#131313",
          duration: 0.8,
          ease: "power2.inOut",
      });

      gsap.to($(this).find(".icon-arrow-green-block svg"), {
          color: "#ffffff",
          duration: 0.8,
          ease: "power2.inOut",
      });
  }, function() {
      gsap.to($(this).find(".fake-arrow-width"), {
          width: "0%",
          duration: 0.8,
          ease: "power2.inOut",
      });

      gsap.to(this, {
          paddingLeft: "3.4rem",
          paddingRight: "1.11rem",
          backgroundColor: "#2b2b2b",
          color: "#ffffff",
          duration: 0.8,
          ease: "power2.inOut",
      });

      gsap.to($(this).find(".icon-arrow-green-block"), {
          backgroundColor: "#8ddd8d",
          duration: 0.8,
          ease: "power2.inOut",
      });

      gsap.to($(this).find(".icon-arrow-green-block svg"), {
          color: "#131313",
          duration: 0.8,
          ease: "power2.inOut",
      });
  }, );
});

function changeTabTitle(newTitle) {
  document.title = newTitle;
}

const originalTitle = document.title;

document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
      changeTabTitle("👋 Pssssht!");
  } else {
      changeTabTitle(originalTitle);
  }
});