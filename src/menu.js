function menuPage(){
    const section = document.createElement('section');
    section.classList.add('menu');

    section.appendChild(
        createMenuItem(
            "Special-Pizza",
            "Every slice delivers a delightful blend of gooey cheese, fresh toppings, and \
            a sauce bursting with flavors, making it an unforgettable pizza experience."
        )
    );

    section.appendChild(
        createMenuItem(
            "Grilled-Chicken",
            "Prepared with the finest herbs and spices, our perfectly grilled chicken \
            promises a delectable and wholesome experience that will leave you craving for more."
        )
    );

    section.appendChild(
        createMenuItem(
            "Chefs-Special",
            "This exquisite creation changes regularly, showcasing the finest seasonal \
            ingredients and culinary expertise, ensuring a unique and delightful culinary \
            journey with every visit."
        )
    );

    section.appendChild(
        createMenuItem(
            "Rare-Steak",
            "Grilled to perfection and served with your choice of delectable sauces, this \
            premium cut of meat is a true celebration of tenderness and robust flavors."
        )
    );

    return section;
};
const createMenuItem = (name, description) =>{
    const menuItem = document.createElement('div');
    menuItem.classList.add('box');

    const div = document.createElement('div');
    div.classList.add('meal-info');
    
    const itemName = document.createElement('h3');
    itemName.textContent = name;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    const itemImage = document.createElement('img');
    itemImage.src = `/src/images/${name.toLowerCase()}.jpg`;
    itemImage.alt = `Image of ${name}`;

    div.appendChild(itemName);
    div.appendChild(itemDescription);
    menuItem.appendChild(itemImage);
    menuItem.appendChild(div);

    return menuItem;
};
function loadMenu(){
const main = document.querySelector('.main');
main.textContent = "";
main.appendChild(menuPage());
};

export default loadMenu;