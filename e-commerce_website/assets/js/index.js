document.addEventListener("DOMContentLoaded", function () {
  const cardsContainers = document.querySelectorAll(
    ".cards-container, .cards-container2"
  );
  const slideSpeed = 10; 
  const slideInterval = 10000; 

  cardsContainers.forEach(function (cardsContainer) {
    let scrollAmount = 0;
    let slideTimer;

    function slideRight() {
      slideTimer = setInterval(function () {
        cardsContainer.scrollLeft += slideSpeed;
        scrollAmount += slideSpeed;

        if (scrollAmount >= cardsContainer.children[0].offsetWidth) {
          clearInterval(slideTimer);
          scrollAmount = 0;
          cardsContainer.appendChild(cardsContainer.children[0]);
          cardsContainer.scrollLeft = 0;
        }
      }, 12); 
    }

    slideRight();

    cardsContainer.addEventListener("mouseenter", function () {
      clearInterval(slideTimer);
    });

    cardsContainer.addEventListener("mouseleave", function () {
      slideRight();
    });

    setInterval(function () {
      slideRight();
    }, slideInterval);
  });

  const leftButton = document.getElementById("leftButton");
  const rightButton = document.getElementById("rightButton");

  leftButton.addEventListener("click", function () {
    const cardsContainer = document.querySelector(
      ".cards-container, .cards-container2"
    );
    cardsContainer.scrollLeft -= 300; 
  });

  rightButton.addEventListener("click", function () {
    const cardsContainer = document.querySelector(
      ".cards-container"
    );
    cardsContainer.scrollLeft += 300;
  });

  const leftButton2 = document.getElementById("leftButton2");
  const rightButton2 = document.getElementById("rightButton2");

  leftButton2.addEventListener("click", function () {
    const cardsContainer2 = document.querySelector(
      ".cards-container2"
    );
    cardsContainer2.scrollLeft -= 300; 
  });

  rightButton2.addEventListener("click", function () {
    const cardsContainer2 = document.querySelector(
      ".cards-container2"
    );
    cardsContainer2.scrollLeft += 300; 
  });
});
