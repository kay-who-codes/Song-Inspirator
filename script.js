const genres = ["Pop", "Rock", "Jazz", "Hip-Hop", "Classical", "EDM", "Country", "Blues"];
const structures = [
  "I, IV, V, I",
  "I, V, vi, IV",
  "ii, V, I",
  "I, vi, IV, V",
  "I, IV, I, V"
];
const vibes = ["Fun", "Angry", "Silly", "Chill", "Romantic", "Energetic", "Dark"];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateSong() {
  document.getElementById("genre").textContent = getRandomItem(genres);
  document.getElementById("structure").textContent = getRandomItem(structures);
  document.getElementById("bpm").textContent = Math.floor(Math.random() * 61) + 80; // Random BPM between 80-140
  document.getElementById("vibe").textContent = getRandomItem(vibes);
}

document.getElementById("generate-button").addEventListener("click", generateSong);
