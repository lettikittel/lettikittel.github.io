function getRandomFoxImage() {
  fetch("https://random.dog/woof.json")
    .then(response => response.json())
    .then(data => console.log(data.url))
}

getRandomFoxImage()