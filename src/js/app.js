export function Sound() {
  // Mute - Unmute sound
  const sound = document.querySelector(".ads_banner--sound");
  let soundCheck = true;
  sound.onclick = (e) => {
    if (soundCheck) {
      sound.innerHTML = '<img src="../svg/banner-sound.svg" alt="unmuted">';
      soundCheck = false;
    } else {
      sound.innerHTML = '<img src="../svg/banner-sound-muted.svg" alt="muted">';
      soundCheck = true;
    }
  };
}

// PC Screen 300x600 with horizontal carousel
export function Horizon300x600() {
  // Slick Carousel
  $(".carousel").slick({
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Code ellipsis - chuyển ký tự thừa thành dấu "..."
  function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
      return str;
    }
    return str.substring(0, maxLength - 3) + "...";
  }

  let itemsName = Array.from(document.querySelectorAll(".item_name"));
  let maxLength = 24;

  itemsName.map((e) => {
    let itemName = e.innerText;
    e.innerText = truncateString(itemName, maxLength);
  });
}
// End

// PC Screen 300x600 with horizontal carousel
export function Vertical300x600() {
  jQuery(function ($) {
    $(window).on("load", function () {
      $(".btn-next").click(function () {
        $(".carousel").carousel("next");
      });

      $(".btn-prev").click(function () {
        $(".carousel").carousel("prev");
      });
    });

    // Slide chuyển động theo chiều dọc
    $(".carousel").on("slide.bs.carousel", function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $(".carousel-item").length;

      if (e.direction === "down") {
        if (idx + itemsPerSlide > totalItems) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i = 0; i < it; i++) {
            $(".carousel-item").eq(i).appendTo(".carousel-inner");
          }
        }
      } else {
        if (idx - itemsPerSlide < 0) {
          for (var j = 0; j < itemsPerSlide; j++) {
            $(".carousel-item")
              .eq(totalItems - 1)
              .prependTo(".carousel-inner");
          }
        }
      }
    });
  });

  // Code ellipsis - chuyển ký tự thừa thành dấu "..."
  function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
      return str;
    }
    return str.substring(0, maxLength - 3) + "...";
  }

  let itemsName = Array.from(document.querySelectorAll(".item_name"));
  let maxLength = 30;

  itemsName.map((e) => {
    let itemName = e.innerText;
    e.innerText = truncateString(itemName, maxLength);
  });
}
// End

// PC Screen 300x250 with horizontal carousel
export function PC300x250() {
  $(".carousel").slick({
    infinite: true,
    dots: true,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Code ellipsis - chuyển ký tự thừa thành dấu "..."
  function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
      return str;
    }
    return str.substring(0, maxLength - 3) + "...";
  }

  let itemsName = Array.from(document.querySelectorAll(".item_name"));
  let maxLength = 18;

  itemsName.map((e) => {
    let itemName = e.innerText;
    e.innerText = truncateString(itemName, maxLength);
  });
}
// End

// PC Screen 320x268 with horizontal carousel
export function PC320x268() {
  $(".carousel").slick({
    infinite: true,
    dots: true,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
// End

// PC Screen 660x300 with horizontal carousel
export function PC660x300() {
  $(".carousel").slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
// End

// PC Screen 660x425 with horizontal carousel
export function PC660x425() {
  $(".carousel").slick({
    infinite: true,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  const skipBtn = document.querySelector(".ads_banner--skip");
  const continueBtn = document.querySelector(".ads_banner_continue");
  const banner = document.querySelector(".ads_banner");
  const body = document.querySelector(".ads_body");
  skipBtn.onclick = function () {
    banner.style.opacity = "0";
    body.style.display = "flex";
    setTimeout(function () {
      banner.style.display = "none";
    }, 300);
  };
  continueBtn.onclick = function () {
    banner.style.display = "block";
    // dung animation keyframes
    setTimeout(function () {
      banner.style.opacity = "0.4";
    }, 100);
    setTimeout(function () {
      banner.style.opacity = "0.7";
    }, 200);
    setTimeout(function () {
      banner.style.opacity = "1";
      body.style.display = "none";
    }, 300);
  };
}
// End

// PC Screen 580x380 with horizontal carousel
export function PC580x380() {
  $(".carousel").slick({
    infinite: false,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 2,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  const skipBtn = document.querySelector(".ads_banner--skip");
  const continueBtn = document.querySelector(".ads_banner_continue");
  const banner = document.querySelector(".ads_banner");
  const body = document.querySelector(".ads_body");
  skipBtn.onclick = function () {
    banner.style.opacity = "0";
    body.style.display = "flex";
    setTimeout(function () {
      banner.style.display = "none";
    }, 300);
  };
  continueBtn.onclick = function () {
    banner.style.display = "block";
    // dung animation keyframes
    setTimeout(function () {
      banner.style.opacity = "0.4";
    }, 100);
    setTimeout(function () {
      banner.style.opacity = "0.7";
    }, 200);
    setTimeout(function () {
      banner.style.opacity = "1";
      body.style.display = "none";
    }, 300);
  };
}
// End
