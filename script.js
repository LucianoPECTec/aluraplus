// Toggle do menu mobile
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
    });
  });
}

// Scrollspy simples para destacar seção ativa no menu
const navLinks = document.querySelectorAll("#mainNav a");

const sections = Array.from(navLinks).map(link => {
  const id = link.getAttribute("href").replace("#", "");
  return document.getElementById(id);
});

function onScroll() {
  const scrollPos = window.scrollY;
  const offset = 120;

  sections.forEach((section, index) => {
    if (!section) return;
    const top = section.offsetTop - offset;
    const bottom = top + section.offsetHeight;

    if (scrollPos >= top && scrollPos < bottom) {
      navLinks.forEach(l => l.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  });
}

window.addEventListener("scroll", onScroll);
onScroll();
