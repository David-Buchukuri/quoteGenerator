const quoteGenerator = () => {
  let nodeList = document.querySelectorAll("p");
  for (let i of nodeList) {
    i.style.opacity = "0";
  }
  document.querySelector("button").disabled = true;
  document.querySelector("button").style.cursor = "default";
  document.querySelector("button").style.opacity = "0.5";
  document.querySelector("button").textContent = "Loading...";

  setTimeout(() => {
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
          for (let i of nodeList) {
            i.style.opacity = "1";
          }
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        document.querySelector(".quote").textContent =
          "Error occured, Try again later";
      })
      .finally(() => {
        document.querySelector("button").disabled = false;
        document.querySelector("button").style.cursor = "pointer";
        document.querySelector("button").textContent = "NEW QUOTE";
        document.querySelector("button").style.opacity = "1";
      });
  }, 2000);
};

document.querySelector(".button").addEventListener("click", quoteGenerator);
