function showPopup(cardId) {
  document.body.classList.add("stop-scrolling");
  var popup = document.getElementById("popup");
  popup.style.display = "grid";
  popup.style.display = "none";

  var title = document.getElementById("popup-title");

  var description = document.getElementById("popup-description");

  var cardData = cardsData.find(function(data) {
    return data.id === cardId;
});
var overview = document.getElementById("popup-overview");
overview.innerHTML = cardData.overview;

var overview2 = document.getElementById("popup-overview2");
overview2.innerHTML = cardData.overview2;

var sectiontitle = document.getElementById("section-title");
sectiontitle.innerHTML = cardData.sectiontitle;

var image = document.getElementById("popup-image");
image.src = cardData.imageUrl;

  // Here you can set the title and description based on the cardId
  title.innerHTML = cardData.title;
  description.innerHTML = cardData.description;

  popup.style.display = "block";
}


function closePopup() {
  document.body.classList.remove("stop-scrolling");
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

  const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        showPopup(card.id);
    });
});

var cardsData = [
  {id: "card1", 
  title: "Oeiras Municipality", 
  description: "This project consisted in designing the whole experience for the public portal of the municipality of Oeiras, considering all the informative pages and websites, but including services too in one only portal.", 
  sectiontitle: "Overview",
  overview: "This project entailed designing the user experience for the public portal of the municipality of Oeiras, covering all informative pages and services in one comprehensive portal. I was responsible for leading the entire design process, from planning and managing the client to presenting and selling ideas. I played a crucial role in the UI and aesthetic of the portal, and collaborated closely with the development team throughout the project. I led a team of three designers, including a UX Researcher, Content Designer, and UX Designer. The end result was a user-friendly, visually appealing portal that effectively communicated all necessary information and services to the public", 
  overview2: "In the development of the new Portal of the Municipality of Oeiras, the team adopted the Design Thinking methodology. This is a process that involves the relevant stakeholders and thinks about the platform in a broad way, with the human element being privileged as the focus of the success of the ideas to be explored. It is a methodology for surveying functional and operational needs, and which seeks to assess the levels of relevance of the solution.For the effective design of the Portal, the User eXperience methodology used allowed us to address the concrete of the interaction with the user, namely the evaluation of the usability of the solution, understanding its context and allowing to map its expectations. This process focuses on the design of the detail and allows to envision desirable and effective interactions.",
  imageUrl: "images/oerias.png" },

  {id: "card2", 
  title: "Up or Out", 
  description: "This is the description for card 2.", 
  sectiontitle: "Overview",
  overview: "shit", 
  imageUrl: "images/uporout.png"},

  {id: "card3", 
  title: "ePortugal - Citizen portal", 
  description: "This is the description for card 3.",
  sectiontitle: "Overview", 
  overview: "shit", 
  imageUrl: "images/eportugal.png"},

  {id: "card4", 
  title: "A Temporária", 
  description: "This is the description for card 4.", 
  sectiontitle: "Overview",
  overview: "shit", 
  imageUrl: "images/temporaria.png"},

  {id: "card5", 
  title: "Viva Mais", 
  description: "This is the description for card 5.", 
  sectiontitle: "Overview",
  overview: "shit", 
  imageUrl: "images/vivamais.png"},

  {id: "card6", 
  title: "Exow Identity", 
  description: "This is the description for card 5.", 
  sectiontitle: "Overview",
  overview: "shit", 
  imageUrl: "images/exow.png"},

  {id: "card7", 
  title: "Mentecapto", 
  description: "This is the description for card 5.", 
  sectiontitle: "Overview",
  overview: "shit", 
  imageUrl: "images/mentecapto.png"},

  {id: "Contacts", 
  title: "Contacts", 
  description: "catch phrase to appeal to leads", 
  overview: "contacts"}, 
  
  // add more card data here
];







window.onload = function(){
  // Show contact form popup on button click
  document.getElementById("show-form-popup").addEventListener("click", function() {
    document.querySelector(".contact-popup-container").style.display = "block";
  });
  
  document.getElementById("close-form-popup").addEventListener("click", function() {
    document.querySelector(".contact-popup-container").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
});

  document.getElementsByClassName("overlay")[0].addEventListener("click", function() {
  document.body.classList.add("no-scroll");
});

document.body.classList.remove("no-scroll");

document.getElementsByClassName("overlay")[0].addEventListener("click", function() {
  document.body.classList.remove("no-scroll");
});

document.getElementById("header-link").addEventListener("click", function() {
  document.querySelector(".contact-popup-container").style.display = "block";
});


}

