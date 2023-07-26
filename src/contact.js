function contactPage() {
    const section = document.createElement('section');
    section.classList.add('contact-us');
    const heading = document.createElement('h3');
    heading.textContent = "Get in touch with us on:";

    const createParagraph = (text) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        return paragraph;
    }

    section.appendChild(
        createParagraph("Our customer's satisfaction is our top priority, and we value every \
        opportunity to connect with them. Whether you have questions, feedback, or need assistance, \
        we're here to listen and provide the support you need."))
    section.appendChild(heading);
    section.appendChild(createParagraph("Phone: (254) 745-678-901"));
    section.appendChild(createParagraph("Email: savorbistro@gmail.com"))

    return section;
}
function loadContact(){
    const main = document.querySelector('.main');
    main.textContent = "";
    main.appendChild(contactPage());
}

export default loadContact;