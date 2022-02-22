const quoteGenerator = () => {
  fetch("https://animechan.vercel.app/api/random")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      if (res.quote) {
        document.querySelector(".quote").textContent = res.quote;
        document.querySelector(
          ".character"
        ).textContent = `Character: ${res.character}`;
        document.querySelector(".anime").textContent = `From: ${res.anime}`;
      } else {
        throw new Error();
      }
    })
    .catch(() => {
      document.querySelector(".quote").textContent =
        "Error occured, Try again later";
    });
};

document.querySelector(".button").addEventListener("click", quoteGenerator);
