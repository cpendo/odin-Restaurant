import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
    const header = document.createElement('header');
    const heading = document.createElement('h1');

    heading.textContent  = "Savor Bistro & Grill";

    header.appendChild(heading);
    header.appendChild(createNavBar())

    return header;
}
function createNavBar() {
    const navBar = document.createElement('nav');
    navBar.classList.add('navbar');
    const list = document.createElement('ul');

    const listItemOne = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.textContent = "Home";
    homeLink.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(homeLink);
        loadHome();
    });
    listItemOne.appendChild(homeLink);

    const listItemTwo = document.createElement('li');
    const menuLink = document.createElement('a');
    menuLink.textContent = "Menu";
    menuLink.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(menuLink);
        loadMenu();
    });
    listItemTwo.appendChild(menuLink);

    const listItemThree = document.createElement('li');
    const contactLink = document.createElement('a');
    contactLink.textContent = "Contact";
    contactLink.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(contactLink);
        loadContact();
    });  
    listItemThree.appendChild(contactLink);

    list.appendChild(listItemOne);
    list.appendChild(listItemTwo);
    list.appendChild(listItemThree);
    navBar.appendChild(list);

    return navBar;
}
function setActive(link){
    const links = document.querySelectorAll('a');

    links.forEach((link) => {
        if (link !== this) {
        link.classList.remove("active");
        }
    });

    link.classList.add("active");
}
function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    return main;
}
function createFooter(){
    const footer = document.createElement('footer');
    const paragraph = document.createElement('p');
    paragraph.textContent = "Copyright © 2023 Cynthia pendo";

    footer.appendChild(paragraph);

    return footer;
}
function loadWebsite(){
    const element = document.querySelector('#content');    

    element.appendChild(createHeader());
    element.appendChild(createMain());
    element.appendChild(createFooter());

    setActive(document.querySelector('a'));
    loadHome();
}

export default loadWebsite;