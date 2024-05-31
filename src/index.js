import './styles.css';
import createHomePage from './home.js';

const homeBtn = document.querySelector("#home");

homeBtn.addEventListener('click', createHomePage);