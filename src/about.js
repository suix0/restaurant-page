import { addText, objectToList } from "./dom.js";

export default function createAboutPage() {
  const contentContainer = document.querySelector("#content");
  const divContainer = document.createElement('div');
  divContainer.classList.add("divAbout");
  contentContainer.innerText = "";

  addText(divContainer, "h1", "About Us", "2rem");
  addText(divContainer, "h3", "We are GAINZTaurant", "1.5rem");
  addText(divContainer, "p", "We believe in creating memorable dining experiences through exceptional food, warm hospitality, and a cozy atmosphere. Nestled in the heart of ###, our restaurant offers a delightful escape from the everyday hustle, inviting you to relax and enjoy the finest culinary delights.", "1rem");


  addText(divContainer, "h3", "Our Story", "1.5rem");
  addText(divContainer, "p", "Founded in 19##, GAINZTaurant was born out of a passion for food and a desire to bring people together. Our journey began with a simple vision: to serve delicious, high-quality meals made from the freshest ingredients. Over the years, we have grown into a beloved dining destination, cherished by locals and visitors alike.", "1rem");

  addText(divContainer, "h3", "Our Philosophy", "1.5rem");
  addText(divContainer, "p", "Founded in 19##, GAINZTaurant was born out of a passion for food and a desire to bring people together. Our journey began with a simple vision: to serve delicious, high-quality meals made from the freshest ingredients. Over the years, we have grown into a beloved dining destination, cherished by locals and visitors alike.", "1rem");

  addText(divContainer, "h3", "Visit Us", "1.5rem");
  addText(divContainer, "p", "We invite you to join us for a meal and experience the warmth and charm of GAINZTaurant. Whether you’re celebrating a special occasion, enjoying a casual lunch, or simply looking for a great cup of coffee, we are here to make your time with us unforgettable.", "1rem");

  const contactInfo = {
    Location: "Earth, Solar System, Milky Way Galaxy",
    Phone: "0922-2100",
    Email: "gainztaurant@boss.com",
    Hours: "8:00AM - 9:00PM"
  }

  objectToList(divContainer, contactInfo);

  contentContainer.appendChild(divContainer);

}