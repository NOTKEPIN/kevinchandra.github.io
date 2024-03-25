const words = ['UI/UX Enthusiast.' , 'Business Analyst.' , 'Product Enthusiast.'];
let index = 0;
const paragraph = document.getElementById('typing');
const staticText = "I'm a ";
const textColor = "black"; // Color for the typed words

function typeWord() {
  const word = words[index];
  let i = 0;

  function type() {
    if (i < word.length) {
      paragraph.innerHTML = staticText + `<span style="color:${textColor}">${word.substring(0, i)}</span>|`;
      i++;
      setTimeout(type, 100);
    } else {
      setTimeout(eraseWord, 2000);
    }
  }

  type();
}

function eraseWord() {
  let i = words[index].length;

  function erase() {
    if (i >= 0) {
      paragraph.innerHTML = staticText + `<span style="color:${textColor}">${words[index].substring(0, i)}</span>|`;
      i--;
      setTimeout(erase, 100);
    } else {
      index = (index + 1) % words.length;
      setTimeout(typeWord, 1000);
    }
  }

  erase();
}

typeWord();



// Place this script just before the closing </body> tag in your HTML
document.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var distanceToBottom = document.body.scrollHeight - window.innerHeight - window.scrollY;

    if (distanceToBottom <= 100) { // Adjust this value as needed
        footer.classList.add('footer-visible');
    } else {
        footer.classList.remove('footer-visible');
    }
});
