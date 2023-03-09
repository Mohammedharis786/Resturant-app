import { homeloader} from './home.js'
import { menuPage } from './menu.js';
import { contactPage } from './contact.js';

homeloader();
// menuPage();
// contactPage();
 
const homeTab = document.querySelector(".pages_page");
homeTab.addEventListener('click',homeloader);   

const menuTab = document.querySelector(".pages_page1");
menuTab.addEventListener('click',menuPage);

const contactTab = document.querySelector(".pages_page2");
contactTab.addEventListener('click',contactPage);
