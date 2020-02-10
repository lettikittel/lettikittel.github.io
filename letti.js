const sexyPicUrls = [
  "https://imgaz1.chiccdn.com/thumb/large/oaupload/banggood/images/AE/4E/1233a68d-8f30-490e-8a68-a43e7fc5e40a.jpg",
  "https://i.pinimg.com/474x/7a/60/f6/7a60f6aa9df9e489cb20f1e7a6969c02--hot-firefighters-hot-firemen.jpg",
  "https://i.pinimg.com/236x/80/e1/5d/80e15dcae37a5566ceaa9869154e98fa--hot-firefighters-hot-firemen.jpg",
  "https://cdn.psychologytoday.com/sites/default/files/styles/amp_metadata_content_image_min_1200px_wide/public/blogs/2439/2011/09/75008-65456.jpg?itok=qErqBpwj",
  "https://queerty-prodweb.s3.amazonaws.com/wp/docs/2014/10/Screen-Shot-2014-10-03-at-1.47.52-PM.png",
  "https://i.redd.it/l2zkjqkrypk11.jpg",
  "https://yt3.ggpht.com/a/AGF-l7-NwSZp2Lk0ozG8EvGV43v4TwhKgIRFqVYN2A=s240-c-k-c0xffffffff-no-rj-mo",
  "https://pbs.twimg.com/profile_images/750835789743984641/BWuiIOOa_400x400.jpg",
  "https://i.pinimg.com/236x/9f/6d/9c/9f6d9cbc80c1e383af35c3179d16d461.jpg",
  "https://2.bp.blogspot.com/-3LKFrHFcNrU/WwaTh83EqcI/AAAAAAACa3o/3NG3ug2n1JoVXwor8ixqQOjusxbJIsvIgCLcBGAs/s1600/33227947_2078665642418998_5923795757101481984_n.jpg",
  "https://atavisionary.com/wp-content/uploads/2016/12/female_firefighters_44.jpg",
  "https://i.imgur.com/WaorhYA.jpg",
  "https://external-preview.redd.it/K27qJdcO4UAhhtzuYncMEPnFQPCJi_2LRr16DmY1h44.jpg?auto=webp&s=5cfb153f669db0c1a64384ba98ac36e67f1aa075",
  "https://lh3.googleusercontent.com/proxy/Erc_IdEW6HspqQ-lWx3NoGGM2ul-2bYaOHMoGvL-I-zhoXjeKiiog3NDAZG-xqO7YLBOiqNljZs2dOMLUczAgJ8IxNl3wnVBZe8o-VaGx3fa4Z9MirL9zgg2",
  "https://i.pinimg.com/originals/77/b5/20/77b52099ec2e1469e2734cf04c57ca77.jpg",
  "https://previews.123rf.com/images/vladnikon/vladnikon1803/vladnikon180300137/96706473-3d-sexy-goth-girl-big-blue-eyes-and-bright-makeup-in-stockings-woman-retro-style-dress-corset-bow-da.jpg",
  "https://external-preview.redd.it/5PfmaVqoRsBhdccYYQQBgT4o9pcmGYzUky5nZ3byC50.jpg?auto=webp&s=45307e965c02135c00ed79e24f13382915636359",
  "https://images-na.ssl-images-amazon.com/images/I/71Bfqr38JPL._SL1200_.jpg",
  "https://i.pinimg.com/originals/8c/33/97/8c3397aeeaded8637119d947b0299956.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rbg-1552670744.jpg?crop=0.533xw:1.00xh;0.0543xw,0&resize=640:*",
  "https://www.dictionary.com/e/wp-content/uploads/2018/03/hey_girl.jpg",
]

const friendCompliments = [
  {
    person: "Matt S",
    answers: [
      "kindness is",
      "human",
      "spoon is wooden"
    ]
  },
  {
    person: "Eric",
    answers: [
      "fragrence is",
      "rejuvenating",
      "excretions are delicious"
    ]
  },
  {
    person: "Roger",
    answers: [
      "moves are",
      "ratchet",
      "grooves is matchin'"
    ]
  },
  {
    person: "Avery",
    answers: [
      "hand is",
      "nimble",
      "brain is equally as nimble"
    ]
  },
  {
    person: "Leo",
    answers: [
      "presence is",
      "calming",
      "vibe is hella dank"
    ]
  },
  {
    person: "Joe",
    answers: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    person: "Neil",
    answers: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    person: "Alisha",
    answers: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    person: "Matt CP",
    answers: [
      "",
      "",
      "",
      ""
    ]
  },
]

const friendComplimentList = document.querySelector("#friend-compliments")

function getSexyImage() {
  return sexyPicUrls[Math.floor(Math.random() * sexyPicUrls.length)]
}

function setBackgroundImage(url) {
  document.body.style.background = `url(${ url }) top left repeat`;
  document.body.style.backgroundSize = "20%";
}

function defaultBackgroundImage() {
  setBackgroundImage(sexyPicUrls[0])
}

function randomBackgroundImage() {
  setBackgroundImage(getSexyImage())
}

function makeCompliment(answers) {
  const complimentTextPar = document.createElement("P")
  complimentTextPar.innerHTML = `Letti, in the time you've been at the Swamp so far, I've noticed your ${ answers[0] } super ${ answers[1] } and your ${ answers[2] }`
  return complimentTextPar
}

function makePerson(person) {
  const personTextPar = document.createElement("P")
  personTextPar.innerHTML = ` - ${ person }`
  return personTextPar
}

function makeFriendCompliment(person, answers) {
  const friendCompliment = document.createElement("DIV")
  friendCompliment.appendChild(makeCompliment(answers))
  friendCompliment.appendChild(makePerson(person))
  return friendCompliment
}

function addFriendComplimentToList(compliment) {
  const complimentListItem = document.createElement("LI")
  complimentListItem.appendChild(compliment)
  friendComplimentList.appendChild(complimentListItem)
}

function addFriendCompliments() {
  friendCompliments.forEach(compliment => {
    const friendCompliment = makeFriendCompliment(
      compliment.person,
      compliment.answers
    )
    addFriendComplimentToList(friendCompliment)
  })
}

function setUpEventListeners() {
  document.getElementById("background")
    .addEventListener("click", randomBackgroundImage)
}

defaultBackgroundImage()
addFriendCompliments()
setUpEventListeners()

