async function loadout() {
  try {
    const response = await fetch('quotes.json');
    const quotes = await response.json();

    // Pick a random quote each time
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    document.getElementById('quote').textContent = `"${quote.text}"`;
    document.getElementById('author').textContent = `– ${quote.author}`;
  } catch (error) {
    console.error("Error loading quotes:", error);
    document.getElementById('quote').textContent = "Could not load quote.";
    document.getElementById('author').textContent = "";
  }
}
loadout()