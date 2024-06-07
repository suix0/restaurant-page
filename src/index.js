import './styles.css';
import createHomePage from './home.js';
import createMenuPage from "./menu.js";
import createAboutPage from "./about.js";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
createHomePage();

homeBtn.addEventListener('click', createHomePage);
menuBtn.addEventListener('click', createMenuPage);
aboutBtn.addEventListener('click', createAboutPage);
