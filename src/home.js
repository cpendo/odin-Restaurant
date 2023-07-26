import chefImage from './images/image-chef.jpg'

function homePage(){
    const section = document.createElement('section');
    section.classList.add('home');
    
    
    section.appendChild(createImageDiv());
    section.appendChild(createInfoDiv());

    return section;
}
function createImageDiv(){
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    const figCaption = document.createElement('figcaption');

    image.src = chefImage;
    image.alt = "Photo of a Chef";
    figCaption.textContent = "Image of Main Chef";

    figure.appendChild(image);
    figure.appendChild(figCaption);
    imageDiv.appendChild(figure);

    return imageDiv;
}
function createInfoDiv(){
    const infoDiv = document.createElement('div');
    const blockQuote = document.createElement('blockquote');
    const quote = document.createElement('q');
    const cite = document.createElement('cite');

    quote.textContent = "The ambiance was inviting and cozy  and the menu was a true culinary masterpiece.";
    cite.textContent = "- Henry Van Dyke (Editor Elle Magazine)";

    blockQuote.appendChild(quote);
    blockQuote.appendChild(cite);

    infoDiv.appendChild(blockQuote);
    infoDiv.appendChild(createContainer());

    return infoDiv;
}
function createContainer(){
    const container = document.createElement('section');
    container.classList.add('container');
    
    const createHeading3 = (text) => {
        const heading = document.createElement('h3');
        heading.textContent = text;
        return heading;
    }

    const createHeading4 = (text) => {
        const heading = document.createElement('h4');
        heading.textContent = text;
        return heading;
    }
    
    const createParagraph = (text) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        return paragraph;
    }
    
    const locationDiv = document.createElement('div');
    const timeDiv = document.createElement('div');

    locationDiv.appendChild(createHeading3("Location"));
    locationDiv.appendChild(createParagraph("Ole Sangale Rd. inside Parallel Four"));
    locationDiv.appendChild(createParagraph("For Reservations call"));
    locationDiv.appendChild(createParagraph("(254) 745-678-901"));

    timeDiv.appendChild(createHeading3("Opening Time"));
    timeDiv.appendChild(createHeading4("Monday to Friday"));
    timeDiv.appendChild(createParagraph("8:00 AM - 10:00 PM"));
    timeDiv.appendChild(createHeading4("Saturday & Sunday"));
    timeDiv.appendChild(createParagraph("10:00 AM - 9:00 PM"));

    container.appendChild(locationDiv);
    container.appendChild(timeDiv); 

    return container;
}
function loadHome(){
    const main = document.querySelector('.main');
    main.textContent = "";
    main.appendChild(homePage());
}

export default loadHome;