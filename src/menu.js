import { addText, addDish } from "./dom.js";


// Add a breakfast heading
export default function createMenuPage() {
  const contentContainer = document.querySelector("#content");
  contentContainer.innerText = "";

  addText(contentContainer, "h1", "Breakfast", "2rem");

  // Add breakfast dishes
  function breakfastDish(dishName, dishMacros, price) {
    return {dishName, dishMacros, price}
  }
  const breakfastOne = breakfastDish("Scrambled Eggs with Smoked Salmon and Spinach", {Protein: "30g",Carbs: "10g",Fats: "15g"}, "$8.50" );
  addDish(contentContainer, breakfastOne.dishName, breakfastOne.dishMacros, breakfastOne.price);


  const breakfastTwo = breakfastDish("Greek Yogurt Parfait with Berries, Granola, and Chia Seeds", {Protein: "25g",Carbs: "30g",Fat: "10g"}, "$7.00" );
  addDish(contentContainer, breakfastTwo.dishName, breakfastTwo.dishMacros, breakfastTwo.price);
  
  const breakfastThree = breakfastDish("Turkey Sausage and Veggie Power Bowl with Quinoa", {Protein: "20g",Carbs: "40g",Fat: "10g"}, "$9.00" );
  addDish(contentContainer, breakfastThree.dishName, breakfastThree.dishMacros, breakfastThree.price);
}
