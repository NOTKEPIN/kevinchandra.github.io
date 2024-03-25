// List of phrases to cycle through
const phrases = [
    "UI/UX Enthusiast",
    "Business Analyst",
    "Product Enthusiast"
  ];
  
  // Target the element where the text will change
  const typingElement = document.getElementById('typing');
  
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  
  function typePhrase() {
    // Get the current phrase
    let currentPhrase = phrases[currentPhraseIndex];
  
    if (isDeleting) {
      // Remove a character
      currentCharIndex--;
      typingElement.textContent = currentPhrase.substring(0, currentCharIndex);
    } else {
      // Add a character
      currentCharIndex++;
      typingElement.textContent = currentPhrase.substring(0, currentCharIndex);
    }
  
    // If the full phrase has been typed out, start deleting after a pause
    if (!isDeleting && currentCharIndex === currentPhrase.length) {
      setTimeout(() => {
        isDeleting = true;
        typePhrase();
      }, 2000); // Delay before starting to delete
    } else if (isDeleting && currentCharIndex === 0) {
      // If the phrase has been fully deleted, move to the next phrase
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(typePhrase, 500); // Delay before typing the next phrase
    } else {
      // Control the speed of typing and deleting
      setTimeout(typePhrase, isDeleting ? 100 : 200);
    }
  }
  
  // Start the typing effect when the page loads
  document.addEventListener('DOMContentLoaded', typePhrase);
  
  
  

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
