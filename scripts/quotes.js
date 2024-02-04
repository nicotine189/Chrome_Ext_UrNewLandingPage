let pElement = document.getElementById("quote");
let pElement2 = document.getElementById("author");

async function fetchData() {
  try {
    const response = await fetch(
      "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
          "x-rapidapi-key":
            "*** Your API Key (Rapid API) ***",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);

    pElement.innerHTML = data.text || "No quote available";
    pElement2.innerHTML = data.author || "Unknown author";
    localStorage.setItem("sentences", pElement.innerHTML);
    localStorage.setItem("author", pElement2.innerHTML);
    localStorage.setItem("updateDate", currentdate);
  } catch (error) {
    console.error("Error:", error);
  }
}

if (localStorage.updateDate !== currentdate) {
  fetchData();
}
