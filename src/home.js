import { addText, addImage, addReview, addList } from "./dom.js";
import restaurant from './fitness.png';

export default function createHomePage() {
  const contentContainer = document.querySelector("#content");
  const restaurantImg = new Image;
  restaurantImg.src = restaurant;

  // Add a heading
  addText(contentContainer, "h1","Welcome to GAINSTaurant", "2rem"); 
  addImage(contentContainer, restaurantImg);

  // Add a welcoming message
  addText(contentContainer, "p", "The perfect restaurant, once a fantasy in every gym and fitness enthusiasts, now a reality.", "1rem"); // Brief message after heading

  // Add a pleasing message to appeal customers
  addText(contentContainer, "h2", "Looking to power your workouts and achieve your fitness goals?", "1.5rem");
  addText(contentContainer, "p", "Look no further than GAINZTurant! We're passionate about providing delicious and nutritious meals specifically designed to support active lifestyles.", "1rem");

  // Add a list dynamically 
  const listContent = [
    "Packed with lean protein sources like grilled chicken, grass-fed beef, fresh fish, and plant-based options like tofu and tempeh.",
    "We use high-quality, fresh ingredients to fuel your body and optimize performance.",
    "We value the importance of macronutrients. Our menu clearly displays protein, carb, and fat content for each dish, making it easy to customize your meal to your fitness goals."
  ]

  addList(contentContainer, "ul", listContent);

  // Create a reviews section
  addText(contentContainer, "h2", "Reviews", "1.5rem");
  addReview(contentContainer, "div", "p", "This was the best! Guilt-free delicious high protein meals!", "1rem", "-McClung");
  addReview(contentContainer, "div", "p", "McDonalds but with lesser calories and higher protein... amazing", "1rem", "-Dave");

  // Create social media platforms at the bottom

}