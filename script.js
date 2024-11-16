document.addEventListener("DOMContentLoaded", () => {
    const btnPl = document.getElementById("btn-pl");
    const btnEn = document.getElementById("btn-en");

    // Funkcja zmieniaj¹ca jêzyk na polski
    function switchToPolish() {
        const elementsPl = document.querySelectorAll('[data-lang="pl"]');
        const elementsEn = document.querySelectorAll('[data-lang="en"]');

        elementsPl.forEach((el) => {
            el.style.display = 'block'; // Poka¿ tekst w jêzyku polskim
        });
        elementsEn.forEach((el) => {
            el.style.display = 'none'; // Ukryj tekst w jêzyku angielskim
        });
    }

    // Funkcja zmieniaj¹ca jêzyk na angielski
    function switchToEnglish() {
        const elementsPl = document.querySelectorAll('[data-lang="pl"]');
        const elementsEn = document.querySelectorAll('[data-lang="en"]');

        elementsPl.forEach((el) => {
            el.style.display = 'none'; // Ukryj tekst w jêzyku polskim
        });
        elementsEn.forEach((el) => {
            el.style.display = 'block'; // Poka¿ tekst w jêzyku angielskim
        });
    }

    // Przypisanie funkcji do przycisków
    btnPl.addEventListener("click", switchToPolish);
    btnEn.addEventListener("click", switchToEnglish);

    // Domyœlnie ustaw jêzyk polski przy ³adowaniu strony
    switchToPolish();
});
