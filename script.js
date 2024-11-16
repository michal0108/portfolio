document.addEventListener("DOMContentLoaded", () => {
    const btnPl = document.getElementById("btn-pl");
    const btnEn = document.getElementById("btn-en");

    // Funkcja zmieniaj�ca j�zyk na polski
    function switchToPolish() {
        const elementsPl = document.querySelectorAll('[data-lang="pl"]');
        const elementsEn = document.querySelectorAll('[data-lang="en"]');

        elementsPl.forEach((el) => {
            el.style.display = 'block'; // Poka� tekst w j�zyku polskim
        });
        elementsEn.forEach((el) => {
            el.style.display = 'none'; // Ukryj tekst w j�zyku angielskim
        });
    }

    // Funkcja zmieniaj�ca j�zyk na angielski
    function switchToEnglish() {
        const elementsPl = document.querySelectorAll('[data-lang="pl"]');
        const elementsEn = document.querySelectorAll('[data-lang="en"]');

        elementsPl.forEach((el) => {
            el.style.display = 'none'; // Ukryj tekst w j�zyku polskim
        });
        elementsEn.forEach((el) => {
            el.style.display = 'block'; // Poka� tekst w j�zyku angielskim
        });
    }

    // Przypisanie funkcji do przycisk�w
    btnPl.addEventListener("click", switchToPolish);
    btnEn.addEventListener("click", switchToEnglish);

    // Domy�lnie ustaw j�zyk polski przy �adowaniu strony
    switchToPolish();
});
