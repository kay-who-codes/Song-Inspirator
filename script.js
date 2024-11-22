// script.js

const genres = [
  "Pop", "Rock", "Jazz", "Hip-Hop", "Orchestral", "EDM", "Country", "Blues", "Soul", "Funk", "Disco", "Folk", "Metal", "Grunge", "Punk",
  "R&B", "Trap", "House", "Techno", "Ambient", "Latin", "Garage", "Anthem", "Electroswing", "Instrumental", "Techno"
];

const structures = [
  "I, IV, V, I", "I, V, vi, IV", "ii, V, I", "I, vi, IV, V", "I, IV, I, V",
  "I, IV, V", "ii, V, vi, IV", "I, vi, ii, V", "I, IV, V, vi", "I, V, I",
  "vi, IV, V, I", "I, V, IV, I", "I, ii, IV, V", "I, IV, V, IV", 
  "ii, IV, V, I", "I, IV, V, vi, IV", "I, V, ii, vi"
];

const vibes = [
  "Fun", "Angry", "Silly", "Chill", "Energetic", "Dark", "Melancholic", 
  "Dreamy", "Quirky", "Motivational", "Mysterious", "Peaceful", 
  "Upbeat", "Aggressive", "Hopeful", "Enlightening", "Experimental"
];
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateSong() {
  // Populate the random song details
  document.getElementById("genre").textContent = getRandomItem(genres);
  document.getElementById("structure").textContent = getRandomItem(structures);
  document.getElementById("bpm").textContent = Math.floor(Math.random() * 61) + 80; // BPM between 80-140
  document.getElementById("vibe").textContent = getRandomItem(vibes);

  // Reveal the output section
  document.getElementById("output").classList.remove("hidden");
}

// Add event listener to the button
document.getElementById("generate-button").addEventListener("click", generateSong);
