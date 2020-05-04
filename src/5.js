const apiKey = "36c8a900";

fetch(`https://www.omdbapi.com/?s=batman&y=2018&apikey=${apiKey}`)
  .then((response) => response.json())
  .then((data) => console.log(data));
