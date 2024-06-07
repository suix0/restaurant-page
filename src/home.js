import { addText, addImage, addReview, addList } from "./dom.js";
import restaurant from './fitness.png';

export default function createHomePage() {
  const contentContainer = document.querySelector("#content");
  contentContainer.innerText = "";
  const restaurantImg = new Image;
  restaurantImg.src = restaurant;

  // Add a heading
  addText(contentContainer, "h1","Welcome to GAINSTaurant", "3rem", "homeHeading"); 
  addImage(contentContainer, restaurantImg);

  // Add a pleasing message to appeal customers
  addText(contentContainer, "h2", "Looking to power your workouts and achieve your fitness goals?", "2rem", "homeIntro" );
  addText(contentContainer, "p", "Look no further than GAINZTurant! We're passionate about providing delicious and nutritious meals specifically designed to support active lifestyles.");

  // Add a list dynamically 
  const listContent = [
    "Packed with lean protein sources like grilled chicken, grass-fed beef, fresh fish, and plant-based options like tofu and tempeh.",
    "We use high-quality, fresh ingredients to fuel your body and optimize performance.",
    "We value the importance of macronutrients. Our menu clearly displays protein, carb, and fat content for each dish, making it easy to customize your meal to your fitness goals."
  ]

  addList(contentContainer, "ul", listContent, "homeList");

  // Create a reviews section
  addText(contentContainer, "h2", "Reviews");
  addReview(contentContainer, "div", "p", "This was the best! Guilt-free delicious high protein meals!", "-McClung", "1rem","mcClung");
  addReview(contentContainer, "div", "p", "McDonalds but with lesser calories and higher protein... amazing", "1rem", "-Dave", "dave");

  // Create social media platforms at the bottom

}