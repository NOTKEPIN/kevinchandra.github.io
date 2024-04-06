const words = ['UI/UX Enthusiast..' , 'Business Analyst..' , 'Product Enthusiast..'];
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

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = targetId === "#" ? document.body : document.querySelector(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

  

// Place this script just before the closing </body> tag in your HTML
let isFooterVisible = false;

function checkFooterVisibility() {
    const footer = document.querySelector('footer');
    const distanceToBottom = document.body.scrollHeight - window.innerHeight - window.scrollY;

    if (distanceToBottom <= 50 && !isFooterVisible) { // Near the bottom
        footer.classList.add('footer-visible');
        isFooterVisible = true;
    } else if (distanceToBottom > 50 && isFooterVisible) { // Not near the bottom
        footer.classList.remove('footer-visible');
        isFooterVisible = false;
    }
}

// Throttle scroll events to prevent performance issues
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkFooterVisibility, 10);
});

document.addEventListener('DOMContentLoaded', checkFooterVisibility);



// Helper function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function checkTimelineElements() {
    const timelineElements = document.querySelectorAll('.cbp_tmtimeline > li');
  
    for (let el of timelineElements) {
      if (isInViewport(el)) {
        el.classList.add('in-view');
        console.log('Element is in view:', el); // Debugging line
      }
    }
  }

  
  


  
  
  
  // Run the check once the content has loaded
  document.addEventListener('DOMContentLoaded', checkTimelineElements);
  
  // Add the check to both scroll and resize for responsiveness
  window.addEventListener('scroll', checkTimelineElements);
  window.addEventListener('resize', checkTimelineElements);



  
  
  
  
