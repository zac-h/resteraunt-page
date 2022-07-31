function generateMenu(){
    const contentDiv = document.getElementById('content');

    const title = document.createElement('h1');
    title.classList.add('pageTitle');
    title.innerText = 'Menu';
    contentDiv.appendChild(title);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    contentDiv.appendChild(menuContainer);

    const menuCategories = (name) => {
        const category = document.createElement('div');
        category.classList.add('menuCategory');
        category.setAttribute('id', name);
        menuContainer.appendChild(category);

        function capitaliseFirstLetter(string){
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        const h1 = document.createElement('h1');
        h1.textContent = capitaliseFirstLetter(name);
        category.appendChild(h1);

        const categoryItems = document.createElement('div');
        categoryItems.classList.add('categoryItems');
        category.appendChild(categoryItems);
     
        return categoryItems;
    }

    const starters = menuCategories('starters');
    const mains = menuCategories('mains');
    const desserts = menuCategories('desserts');


    const menuItem = (name, imageURL, price, categoryContainer) => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('itemCard');
        itemCard.setAttribute('id', name);

        const itemInfo = document.createElement('div');
        itemInfo.classList.add('itemInfo');

            const itemName = document.createElement('div');
            itemName.textContent = name;
            itemInfo.appendChild(itemName);

            const itemPrice = document.createElement('div');
            itemPrice.textContent = price;
            itemInfo.appendChild(itemPrice);

        itemCard.appendChild(itemInfo);

        const itemImage = document.createElement('img');
        itemImage.src = imageURL;
        itemImage.classList.add('itemImage')
        itemCard.appendChild(itemImage);



        categoryContainer.appendChild(itemCard);
    }

    menuItem('Garlic Bread', 'images/garlicBread.jpeg', '$10', starters);
    menuItem('Arancini Balls', 'images/aranciniBalls.jpeg', '$15', starters);
    menuItem('Pasta', 'images/pasta.jpeg', '$25', mains);
    menuItem('Chocolate Mousse', 'images/chocolateMousse.jpeg', '$15', desserts);
}

export default generateMenu;