let toggleMenu = document.querySelector(".toggle-menu");
let Menu = document.querySelector(".links");
let menuLinks = document.querySelectorAll(".links li a");

//////
let searchForm = document.querySelector("header nav .form");
let magnifier = document.querySelector(".magnifier");
let mqLarge = window.matchMedia("(min-width: 992px)");
let mqMedium = window.matchMedia("(min-width: 768px) and (max-width: 991px)");
let mqSmall = window.matchMedia("(max-width: 767px)");

/*
if (mqMedium.matches || mqLarge.matches) {
  toggleMenu.style.display = "none";
  Menu.style.display = "flex";
} else if (mqSmall.matches) {
  Menu.style.display = "none";
  toggleMenu.style.display = "block";
}

magnifier.addEventListener("click", function () {
  searchForm.classList.toggle("open");
  if (searchForm.classList.contains("open")) {
    toggleMenu.style.display = "none";
    Menu.style.display = "none";
  } else {
    if (mqMedium.matches || mqLarge.matches) {
      Menu.style.display = "flex";
    } else if (mqSmall.matches) {
      toggleMenu.style.display = "block";
    }
  }
});
*/

magnifier.addEventListener("click", function () {
  searchForm.classList.toggle("open");
  if (searchForm.classList.contains("open")) {
    if (window.innerWidth >= 768 && window.innerWidth < 992) {
      Menu.style.display = "none";
    }
    if (window.innerWidth < 768) {
      toggleMenu.style.display = "none";
    }
  } else {
    if (window.innerWidth >= 768 && window.innerWidth < 992) {
      // window.location.reload();
      Menu.style.display = "flex";
      toggleMenu.style.display = "none";
    } else if (window.innerWidth < 768) {
      // window.location.reload();
      toggleMenu.style.display = "block";
      Menu.style.display = "none";
    }
  }
});
//////

console.log(menuLinks);
menuLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.target.parentElement.parentElement
      .querySelectorAll(".active")
      .forEach((ele) => {
        ele.classList.remove("active");
      });
    e.target.classList.add("active");
  });
});

toggleMenu.addEventListener("click", function () {
  Menu.classList.toggle("active");
});

let LeftIcon = document.querySelector(".left-icon");
let rightIcon = document.querySelector(".right-icon");
let landingSec = document.querySelector(".landing");
let bullets = document.querySelectorAll(".landing .bullets li");
console.log(bullets);

let imgsArr = ["100.jpg", "slider7.jpeg", "slider6.jpg", "slider5.jpg"];
let currentSlide = 1;
rightIcon.addEventListener("click", function () {
  clearInterval(counter);
  updateImg();
  if (currentSlide === imgsArr.length) {
    currentSlide = 1;
  } else {
    currentSlide++;
  }
});
LeftIcon.addEventListener("click", function () {
  clearInterval(counter);
  updateImg();
  if (currentSlide == 1) {
    // return false;
    currentSlide = imgsArr.length;
  } else {
    currentSlide--;
  }
});

let counter = setInterval(() => {
  updateImg();
  if (currentSlide === imgsArr.length) {
    currentSlide = 1;
  } else {
    currentSlide++;
  }
}, 5000);
function updateImg() {
  landingSec.style.cssText = `background-image: url('images/${
    imgsArr[currentSlide - 1]
  }');`;
}

//////////////////////////////

let imgContainer = document.querySelector(".image-container");
let galleryItem = document.querySelectorAll(".image-container .item");
console.log(galleryItem);
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let x = 0;
nextBtn.addEventListener("click", function () {
  clearInterval(counter2);
  x = x + 45;
  imgContainer.style.cssText = `transform: perspective(1000px) rotateY(${x}deg);`;
});
prevBtn.addEventListener("click", function () {
  clearInterval(counter2);
  x = x - 45;
  imgContainer.style.cssText = `transform: perspective(1000px) rotateY(${x}deg);`;
});

let counter2 = setInterval(function () {
  x = x - 45;
  imgContainer.style.cssText = `transform: perspective(1000px) rotateY(${x}deg);`;
}, 3000);
/////////////////////////////////////
let aboutSection = document.querySelector(".about");
let allSpan = document.querySelectorAll(".statistics .content span");
let started = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= aboutSection.offsetTop + 300) {
    if (started == false) {
      allSpan.forEach((span) => {
        startCount(span);
      });
      started = true;
    }
  }
});

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(function () {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

///////////////////////////
/*
window.addEventListener("scroll", function () {
  if (window.scrollY >= aboutSection.offsetTop + 300) {
  }
});

allSpan.forEach((span) => {
  setTimeout(counting, 2000);
  // counting();

  function counting() {
    let currentNum = span.textContent;
    let goal = span.dataset.goal;
    let increment = goal / 35;

    currentNum = Math.ceil(currentNum + increment);
    if (currentNum < goal) {
      span.textContent = currentNum;
      setTimeout(counting, 2000);
    } else {
      span.textContent = goal;
    }
  }
});
*/
