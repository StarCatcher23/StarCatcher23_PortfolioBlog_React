async function loadZenQuote() {
  try {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();

    const quote = data[0].q;
    const author = data[0].a;

    document.getElementById("quote-text").textContent = quote;
    document.getElementById("quote-author").textContent = `— ${author}`;
  } catch (error) {
    document.getElementById("quote-text").textContent = "Stay positive and keep moving forward.";
    document.getElementById("quote-author").textContent = "";
  }
}

loadZenQuote();
