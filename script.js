// Selectăm containerul principal de conținut
const content = document.getElementById("content");

// Selectăm toate butoanele din navbar
const buttons = document.querySelectorAll(".nav-buttons .custom-btn");


// Adăugăm eveniment de click pentru fiecare buton
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Citim ce pagină reprezintă butonul
    const page = btn.dataset.page;

    // Înlocuim conținutul
    if (pages[page]) {
      content.innerHTML = pages[page];
      // Scroll la începutul conținutului
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});