// sta3mlna 3 fonctions bch n5dmo calculatrice.. whda ll clear w whda ll input t3 ar9am w whda ll les operations
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Ajoute la valeur au display
}

function clearDisplay() {
    document.getElementById('display').value = ' '; // Efface le display
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Évalue l'expression dans le display
        display.value = eval(display.value);  // el eval t5dm operation mathematique 3la chaine de caratére 
    } catch (error) {
        alert('Erreur dans cette expression');
        clearDisplay(); // 3ayatna ll fonction hdhiya bch ki ttl3 alert t3 erreur bch ki tenzl ok tfass5 whdha  eli fl calcul
    }
}
