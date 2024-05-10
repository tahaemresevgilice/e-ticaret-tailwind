document.addEventListener("DOMContentLoaded", function () {
  const cardsContainers = document.querySelectorAll(
    ".cards-container, .cards-container2"
  );
  const slideSpeed = 10; // Kaydırma hızını artırdık
  const slideInterval = 10000; // Otomatik kaydırma aralığı (milisaniye cinsinden), 10 saniye olarak ayarlandı

  cardsContainers.forEach(function (cardsContainer) {
    let scrollAmount = 0;
    let slideTimer;

    function slideRight() {
      slideTimer = setInterval(function () {
        cardsContainer.scrollLeft += slideSpeed;
        scrollAmount += slideSpeed;

        // Eğer scrollAmount container'ın genişliğini geçerse, en son kartı başa taşı
        if (scrollAmount >= cardsContainer.children[0].offsetWidth) {
          clearInterval(slideTimer);
          scrollAmount = 0;
          cardsContainer.appendChild(cardsContainer.children[0]);
          cardsContainer.scrollLeft = 0;
        }
      }, 12); // Her 12 milisaniyede bir kaydırma yapar
    }

    // Otomatik kaydırma işlevini başlat
    slideRight();

    // Fare container üzerindeyken otomatik kaydırmayı durdur
    cardsContainer.addEventListener("mouseenter", function () {
      clearInterval(slideTimer);
    });

    // Fare container üzerinden ayrıldığında otomatik kaydırmayı tekrar başlat
    cardsContainer.addEventListener("mouseleave", function () {
      slideRight();
    });

    // Otomatik kaydırma için zamanlayıcı
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
    cardsContainer.scrollLeft -= 300; // Kartları sola kaydır
  });

  rightButton.addEventListener("click", function () {
    const cardsContainer = document.querySelector(
      ".cards-container"
    );
    cardsContainer.scrollLeft += 300; // Kartları sağa kaydır
  });

  const leftButton2 = document.getElementById("leftButton2");
  const rightButton2 = document.getElementById("rightButton2");

  leftButton2.addEventListener("click", function () {
    const cardsContainer2 = document.querySelector(
      ".cards-container2"
    );
    cardsContainer2.scrollLeft -= 300; // Kartları sola kaydır
  });

  rightButton2.addEventListener("click", function () {
    const cardsContainer2 = document.querySelector(
      ".cards-container2"
    );
    cardsContainer2.scrollLeft += 300; // Kartları sağa kaydır
  });
});
