import { addText, addDish } from "./dom.js";


// Add a breakfast heading
export default function createMenuPage() {
  const contentContainer = document.querySelector("#content");
  contentContainer.innerText = "";

  addText(contentContainer, "h1", "Breakfast", "2rem");

  // Add breakfast dishes
  function dish(dishName, dishMacros, price) {
    return {dishName, dishMacros, price}
  }

  const breakfastOne = dish("Scrambled Eggs with Smoked Salmon and Spinach", {Protein: "30g",Carbs: "10g",Fats: "15g"}, "$8.50" );
  addDish(contentContainer, breakfastOne.dishName, breakfastOne.dishMacros, breakfastOne.price);


  const breakfastTwo = dish("Greek Yogurt Parfait with Berries, Granola, and Chia Seeds", {Protein: "25g",Carbs: "30g",Fat: "10g"}, "$7.00" );
  addDish(contentContainer, breakfastTwo.dishName, breakfastTwo.dishMacros, breakfastTwo.price);
  
  const breakfastThree = dish("Turkey Sausage and Veggie Power Bowl with Quinoa", {Protein: "20g",Carbs: "40g",Fat: "10g"}, "$9.00" );
  addDish(contentContainer, breakfastThree.dishName, breakfastThree.dishMacros, breakfastThree.price);

  // Add lunch
  addText(contentContainer, "h1", "Lunch", "2rem");

  const lunchOne = dish("Seared Tuna Salad with Avocado and Mixed Greens", {Protein: "35g",Carbs: "15g",Fats: "20g"}, "$9.75");
  addDish(contentContainer, lunchOne.dishName, lunchOne.dishMacros, lunchOne.price);


  const lunchTwo = dish("Chicken Breast Sandwich on Whole Wheat Bun with Hummus and Veggies", {Protein: "40g",Carbs: "30g",Fat: "10g"}, "$8.25" );
  addDish(contentContainer, lunchTwo.dishName, lunchTwo.dishMacros, lunchTwo.price);
  
  const lunchThree = dish("Lentil Soup with Whole Grain Bread and Side Salad", {Protein: "25g",Carbs: "45g",Fat: "5g"}, "$8.00" );
  addDish(contentContainer, lunchThree.dishName, lunchThree.dishMacros, lunchThree.price);

  // Add preworkout meal
  addText(contentContainer, "h1", "Pre-workout Meal", "2rem");

  const preOne = dish("Avocado Toast with Egg", {Protein: "15g",Carbs: "25g",Fats: "20g"}, "$4.00");
  addDish(contentContainer, preOne.dishName, preOne.dishMacros, preOne.price);


  const preTwo = dish("Whole Wheat Toast with Mashed Avocado and Scrambled Egg Whites", {Protein: "20g",Carbs: "30g",Fat: "15g"}, "$4.50");
  addDish(contentContainer, preTwo.dishName, preTwo.dishMacros, preTwo.price);
  
  const preThree = dish("Smoothie Bowl with Banana, Peanut Butter, and Granola", {Protein: "15g",Carbs: "50g",Fat: "15g"}, "$5.00");
  addDish(contentContainer, preThree.dishName, preThree.dishMacros, preThree.price);

  // Add post-workout meal
  addText(contentContainer, "h1", "Post-workout Meal", "2rem");

  const postOne = dish("Grilled Chicken Breast with Sweet Potato and Broccoli", {Protein: "40g",Carbs: "40g",Fats: "8g"}, "$6.50");
  addDish(contentContainer, postOne.dishName, postOne.dishMacros, postOne.price);


  const postTwo = dish("Lean Beef and Brown Rice Bowl with Sautéed Spinach ", {Protein: "45g",Carbs: "50g",Fat: "15g"}, "$7.00");
  addDish(contentContainer, postTwo.dishName, postTwo.dishMacros, postTwo.price);
  
  const postThree = dish("Salmon Fillet with Quinoa and Roasted Asparagus", {Protein: "35g",Carbs: "35g",Fat: "15g"}, "$8.00");
  addDish(contentContainer, postThree.dishName, postThree.dishMacros, postThree.price);
}
