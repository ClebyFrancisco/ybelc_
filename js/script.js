$(window).on("load", function () {
  "use strict";

  setTimeout(function () {
    $(".loader-logo").removeClass("fadeIn").addClass("fadeOut");
  }, 800);
  setTimeout(function () {
    $("body").removeClass("overflow-hidden");
    $(".loader").addClass("fade loaded");
  }, 800);

  setTimeout(function () {
    if ($("body").hasClass("split")) {
      $("body").addClass("split-loaded");
    }
    if ($("body").hasClass("fullscreen")) {
      $("body").addClass("fullscreen-loaded");
    }
  }, 800);
});

$(function () {
  "use strict";

  var sliderFlip = $(".slider-flip"),
    sliderFade = $(".slider-fade");

  if (sliderFlip.length) {
    var swiper = new Swiper(".swiper-container", {
      effect: "flip",
      grabCursor: true,
      speed: 1200,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  if (sliderFade.length) {
    var swiper = new Swiper(".swiper-container", {
      effect: "fade",
      grabCursor: true,
      speed: 1200,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  $(window).on("load", function () {
    $(".content-section__info, .writealine__content").mCustomScrollbar({
      autoHideScrollbar: true,
    });
  });

  $(".skillbar").skillBars({
    from: 0,
    speed: 4000,
    interval: 100,
  });

  var bgndVideo = $("#bgndVideo"),
    bgndVideoControls = $("#bgndVideoControls");

  if (bgndVideo.length) {
    bgndVideo.mb_YTPlayer({
      mute: true,
      containment: "#video-wrapper",
      showControls: false,
      autoPlay: true,
      loop: true,
      startAt: 0,
      quality: "default",
    });
  }

  if (bgndVideoControls.length) {
    bgndVideoControls.mb_YTPlayer({
      mute: false,
      containment: "#video-wrapper",
      showControls: false,
      autoPlay: true,
      loop: true,
      startAt: 0,
      quality: "default",
    });
  }

  var bgndKenburns1 = $("#bgndKenburns");
  if (bgndKenburns1.length) {
    bgndKenburns1.vegas({
      timer: false,
      delay: 10000,
      transition: "fade2",
      transitionDuration: 2000,
      slides: [
        { src: "http://via.placeholder.com/1000x1200" },
        { src: "http://via.placeholder.com/1000x1200" },
        { src: "http://via.placeholder.com/1000x1200" },
      ],
      animation: [
        "kenburnsUp",
        "kenburnsDown",
        "kenburnsLeft",
        "kenburnsRight",
      ],
    });
  }

  var bgndKenburnsFull = $("#bgndKenburnsFull");
  if (bgndKenburnsFull.length) {
    bgndKenburnsFull.vegas({
      timer: false,
      delay: 10000,
      transition: "fade2",
      transitionDuration: 2000,
      slides: [
        { src: "http://via.placeholder.com/1920x1080" },
        { src: "http://via.placeholder.com/1920x1080" },
        { src: "http://via.placeholder.com/1920x1080" },
      ],
      animation: [
        "kenburnsUp",
        "kenburnsDown",
        "kenburnsLeft",
        "kenburnsRight",
      ],
    });
  }

  $("#countdown").countdown({
    until: $.countdown.UTCDate(+10, 2019, 5, 22),
    format: "D",
  });
  $("#countdown-large").countdown({
    until: $.countdown.UTCDate(+10, 2019, 5, 22),
    format: "DHMS",
  });

  $(".notify-form").ajaxChimp({
    callback: mailchimpCallback,
    url: "https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=54a7906900",
  });

  function mailchimpCallback(resp) {
    if (resp.result === "success") {
      $(".notify").find(".form").addClass("is-hidden");
      $(".notify").find(".subscription-ok").addClass("is-visible");
      setTimeout(function () {
        $(".notify").find(".subscription-ok").removeClass("is-visible");
        $(".notify").find(".form").delay(300).removeClass("is-hidden");
        $(".notify-form").trigger("reset");
      }, 5000);
    } else if (resp.result === "error") {
      $(".notify").find(".form").addClass("is-hidden");
      $(".notify").find(".subscription-error").addClass("is-visible");
      setTimeout(function () {
        $(".notify").find(".subscription-error").removeClass("is-visible");
        $(".notify").find(".form").delay(300).removeClass("is-hidden");
        $(".notify-form").trigger("reset");
      }, 5000);
    }
  }

  $("#writealine-form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize(),
    }).done(function () {
      $(".writealine").find(".form").addClass("is-hidden");
      $(".writealine").find(".reply-group").addClass("is-visible");
      setTimeout(function () {
        $(".writealine").find(".reply-group").removeClass("is-visible");
        $(".writealine").find(".form").delay(300).removeClass("is-hidden");
        th.trigger("reset");
      }, 5000);
    });
    return false;
  });

  $(window).on("load", function () {
    var bgndNightSky = $("#nightsky-js");
    if (bgndNightSky.length) {
      particlesJS("nightsky-js", {
        particles: {
          number: {
            value: 500,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              opacity_min: 0.05,
              sync: false,
            },
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 1,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "repulse",
            },
            onclick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    }

    var bgndParticles = $("#particles-js");
    if (bgndParticles.length) {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.3,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 80,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 180,
            color: "#ffffff",
            opacity: 0.7,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 800,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 800,
              size: 80,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    }

    var bgndSnow = $("#snow-js");
    if (bgndSnow.length) {
      particlesJS("snow-js", {
        particles: {
          number: {
            value: 300,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.4,
            random: true,
            anim: {
              enable: true,
              speed: 0.2,
              opacity_min: 0.05,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 2.4,
              size_min: 3,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "bottom",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "repulse",
            },
            onclick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function (event) {
  var dataText = ["Research ", "   Development ", "Security "];

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.querySelector("h1").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    } else if (typeof fnCallback == "function") {
      setTimeout(fnCallback, 600);
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 600);
    }

    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);
});

const btn = document.getElementById("logo");
btn.addEventListener("click", () => {
  window.location.reload();
});
