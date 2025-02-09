// Fetch a random quote
async function fetchQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    document.getElementById("quote").innerText = data.content;
  } catch (error) {
    console.error("Error fetching quote:", error);
    document.getElementById("quote").innerText =
      "Failed to fetch a quote. Please try again.";
  }
}

// Add event listener to the button
document.getElementById("new-quote").addEventListener("click", fetchQuote);

// Fetch a quote when the page loads
fetchQuote();
