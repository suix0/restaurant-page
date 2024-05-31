export default function addText(container, element, message, fontSize) {
  const text = document.createElement(element);
  text.textContent = message;
  text.style.fontSize = fontSize;
  container.appendChild(text);
}