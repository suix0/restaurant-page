function addText(container, element, message, fontSize) {
  const text = document.createElement(element);
  text.textContent = message;
  text.style.fontSize = fontSize;
  container.appendChild(text);
}

function addImage(container, image) {
  container.appendChild(image);
}

function addReview(container, sectionElement, sectionTextElement, sectionMessage, sectionMessageFS, customer) {
  const section = document.createElement(sectionElement); 
  addText(section, sectionTextElement, sectionMessage, sectionMessageFS);
  addText(section, sectionTextElement, customer, sectionMessageFS)
  container.appendChild(section);
}

function addList(container,listType, listContent) {
  const newList = document.createElement(listType);

  listContent.map(content => {
    const listContentDom = document.createElement("li");
    listContentDom.textContent = content;
    newList.appendChild(listContentDom); 
  })

  container.appendChild(newList);
}

function macroToNum(str) {
  return parseInt(str.slice(0, 2));
}

function addDish(container, dishName, dishMacros, dishPrice) {
  const dishContainer = document.createElement("div");
  dishContainer.style.border = "1px solid black";

  addText(dishContainer, "h3", dishName, "1rem");
  
  // Get keys and vals of macros and put in arr
  const dishMacrosKeys = Object.keys(dishMacros);
  const dishMacrosVals = Object.values(dishMacros);
  
  // Add macros in dish
  for (let i = 0; i < dishMacrosKeys.length; i++) {
    let macros = "";
    macros = `${dishMacrosKeys[i]}: ${dishMacrosVals[i]}`;
    const macrosDom = document.createElement("p");
    macrosDom.textContent = macros;
    dishContainer.appendChild(macrosDom);
  }

  // Dynamically calculate calorie and add it
  let macrosCalories = [];
  
  for (let macro in dishMacros) {
    if (macro === "Protein") {
      macrosCalories.push(macroToNum(dishMacros[macro]) * 4);
    } else if (macro === "Carbs") {
      macrosCalories.push(macroToNum(dishMacros[macro]) * 4);
    } else {
      macrosCalories.push(macroToNum(dishMacros[macro]) * 9);
    }
  }

  let totalCalories = macrosCalories.reduce((cals, currentCal) => cals + currentCal, 0);

  const calorieDom = document.createElement("h4");
  calorieDom.textContent = `Calories: ${totalCalories}`;
  dishContainer.appendChild(calorieDom);
  
  // Add price
  const dishPriceDom = document.createElement('p');
  dishPriceDom.textContent = dishPrice;
  dishContainer.appendChild(dishPriceDom);

  container.appendChild(dishContainer);
}

function objectToList(contentContainer, obj) {
  const objList = document.createElement("ul");

  // Get keys and vals of macros and put in arr
  const objKeys = Object.keys(obj);

  const objVals = Object.values(obj);
  
  // Add macros in dish
  for (let i = 0; i < objKeys.length; i++) {
    let contactInfos = "";
    contactInfos = `${objKeys[i]}: ${objVals[i]}`;
    const contactDom = document.createElement("li");
    contactDom.textContent = contactInfos;
    objList.appendChild(contactDom);
  }

  contentContainer.appendChild(objList);
}

export { addText, addImage, addReview, addList , addDish, objectToList};