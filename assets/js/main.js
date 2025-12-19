
// ---------------tab-panel-js--------------------

const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // remove active from all
    buttons.forEach(btn => btn.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    // add active to clicked button + matching content
    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

// ---------------lenis-smooth-scrolling---------------

const lenis = new Lenis({
    duration: 1.2,        // scroll speed
    smooth: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

// ----------------------hamburger-menu-------------------


  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
