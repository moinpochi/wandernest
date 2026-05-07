console.log("WanderNest Loaded");



// NAVBAR EFFECT

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.classList.add("sticky");

  } else {

    navbar.classList.remove("sticky");

  }

});



// FADE ANIMATION

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});



const hiddenElements = document.querySelectorAll(
  ".card, .destination-card, .review, .feature, .stat"
);



hiddenElements.forEach(el => observer.observe(el));



// COUNTER ANIMATION

const counters = document.querySelectorAll(".stat h3");

counters.forEach(counter => {

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");

    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 20);

    } else {

      counter.innerText = target;

    }

  };

  updateCounter();

});
