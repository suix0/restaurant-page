import './styles.css';
import createHomePage from './home.js';
import createMenuPage from "./menu.js";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
homeBtn.addEventListener('click', createHomePage);
menuBtn.addEventListener('click', createMenuPage);
