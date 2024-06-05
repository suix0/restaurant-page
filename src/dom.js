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
  const list = document.createElement(listType);

  listContent.map(content => {
    const listContentDom = document.createElement("li");
    listContentDom.textContent = content;
    list.appendChild(listContentDom); 
  })

  container.appendChild(list);
}

export { addText, addImage, addReview, addList };