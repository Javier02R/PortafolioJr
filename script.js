const frases = ["Si puedes imaginarlo", "Puedes programarlo </>"];
  let i = 0, j = 0, isDeleting = false;

  function typeEffect() {
    const textEl = document.getElementById("typing-text");
    const current = frases[i];
    textEl.textContent = current.substring(0, j) + (j % 2 === 0 ? "|" : "");

    if (!isDeleting && j < current.length) {
      j++;
    } else if (isDeleting && j > 0) {
      j--;
    }

    if (j === current.length) isDeleting = true;
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % frases.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 300);
  }

  document.addEventListener("DOMContentLoaded", typeEffect);