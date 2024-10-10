// We use the Objects below to control toggling like / unlike status

const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red": "",
  "": "red"
};

// STEP 1: JavaScript finds the elements we want to make clickable
const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(serverMessage) {
      alert("You notified the server!");
      heart.innerText = glyphStates[heart.innerText];  // Toggle between ♡ and ♥
      heart.style.color = colorStates[heart.style.color];  // Toggle color between red and default
    })
    .catch(function(error) {
      alert("Something went wrong!");
    });
}

// STEP 3: Add a click event listener to each heart icon
for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

//------------------------------------------------------------------------------
// Mimic server call for demo purposes
function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
