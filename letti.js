function getRandomFoxImage() {
  fetch("https://randomfox.ca/floof/")
    .then(data => console.log(data))
}

getRandomFoxImage()