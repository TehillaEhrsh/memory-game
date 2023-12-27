const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const bord = document.getElementsByClassName("bord")
let playerLives = 12;


playerLivesCount.textContent = playerLives;

const getData = () => [

 {imgSrc: 'img/img10.jpg' , name :"img10"},
 {imgSrc: 'img/img9.jpg' , name :"img9"},
//  {imgSrc: 'img/img8.jpg' , name :"img8"},
 {imgSrc: 'img/img7.jpg' , name :"img7"},
 {imgSrc: 'img/img6.jpg' , name :"img6"},
 {imgSrc: 'img/img5.jpg' , name :"img5"},
 {imgSrc: 'img/img4.jpg' , name :"img4"},
 {imgSrc: 'img/img3.jpg' , name :"img3"},
 {imgSrc: 'img/img2.jpg' , name :"img2"},

 {imgSrc: 'img/img10.jpg' , name :"img10"},
 {imgSrc: 'img/img9.jpg' , name :"img9"},
//  {imgSrc: 'img/img8.jpg' , name :"img8"},
 {imgSrc: 'img/img7.jpg' , name :"img7"},
 {imgSrc: 'img/img6.jpg' , name :"img6"},
 {imgSrc: 'img/img5.jpg' , name :"img5"},
 {imgSrc: 'img/img4.jpg' , name :"img4"},
 {imgSrc: 'img/img3.jpg' , name :"img3"},
 {imgSrc: 'img/img2.jpg' , name :"img2"}

 
];

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

const cardGenerator = () => {
  const cardData = randomize();
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    face.src = item.imgSrc 
    card.setAttribute('name', item.name);
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      chckCard(e);
    });
  });
};
const chckCard = (e) => {
  
  const clickedCard = e.target;
  
  clickedCard.classList.add("flipped");

const flippedCards = document.querySelectorAll(".flipped");
const toggleCard = document.querySelectorAll(".toggleCard")

console.log(flippedCards);
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")

    ) {
        flippedCards.forEach((card)=>{
            card.classList.remove("flipped")
            card.style.pointerEvents= "none"
        })
    } else {
        flippedCards.forEach((card)=>{
            card.classList.remove("flipped");
           setTimeout(()=> card.classList.remove("toggleCard"),1000)
        })
        playerLives--
        playerLivesCount.textContent= playerLives
        if(playerLives===0){
            restart("try again");
        }
    }
  }
  if (toggleCard.length===16){
    restart("you  winner")
  }
};

const restart = (text) =>{
    let cardData= randomize()
    let faces= document.querySelectorAll(".face")
    let cards = document.querySelectorAll(".card")
    section.style.pointerEvents ="none"
    cardData.forEach((item, index)=>{
       cards[index].classList.remove("toggleCard") 
setTimeout(()=>{
    cards[index].style.pointerEvents= "all"
    faces[index].src= item.imgSrc;
    cards[index].setAttribute("name", item.name)
section.style.pointerEvents="all";
}, 1000)
    })
    playerLives=15
    playerLivesCount.textContent= playerLives
    setTimeout(()=> window.alert(text),100)
}


cardGenerator();
