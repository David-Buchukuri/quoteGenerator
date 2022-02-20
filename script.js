// let a = async () => {
//   let r = await fetch("https://animechan.vercel.app/api/random")
//   let parsed = await r.json();
//   console.log(parsed);
// };

// a();

const quoteGenerator = () => {
  fetch("https://animechan.vercel.app/api/random")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      document.querySelector(".quote").textContent = res.quote;
      document.querySelector(
        ".character"
      ).textContent = `Character: ${res.character}`;
      document.querySelector(".anime").textContent = `From: ${res.anime}`;
    });
};

document.querySelector(".button").addEventListener("click", quoteGenerator);
