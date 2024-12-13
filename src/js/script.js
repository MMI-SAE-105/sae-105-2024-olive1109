/* Menu */
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

// Vérifier si les éléments existent avant d'ajouter l'événement
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    // Mise à jour des attributs ARIA pour accessibilité
    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    page.classList.toggle("noscroll", isClosed);
  });
}


/* Caroussel */
document.addEventListener('DOMContentLoaded', function() {
  const beforeBtns = document.querySelectorAll('.before_btn');
  const afterBtns = document.querySelectorAll('.after__btn');
  const caroussels = document.querySelectorAll('.caroussel__program');

  caroussels.forEach((caroussel, index) => {
      let scrollAmount = 0;

      afterBtns[index].addEventListener('click', () => {
          caroussel.scrollBy({ left: caroussel.clientWidth, behavior: 'smooth' });
          scrollAmount += caroussel.clientWidth;
      });

      beforeBtns[index].addEventListener('click', () => {
          caroussel.scrollBy({ left: -caroussel.clientWidth, behavior: 'smooth' });
          scrollAmount -= caroussel.clientWidth;
      });
  });
});