 function generateHome() {
    const contentDiv = document.getElementById('content');
    
    const title = document.createElement('h1');
    title.classList.add('pageTitle');
    title.innerText = 'Restaurant Page';
    contentDiv.appendChild(title);

    const text = document.createElement('p');
    text.classList.add('contentText');
    text.innerText = 'Serving Adelaide\'s best pasta since 1980.';
    contentDiv.appendChild(text);

    const image = document.createElement('img');
    image.src = 'https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM='
    image.style.height = '400px';
    image.style.width = 'auto';
    contentDiv.appendChild(image);

}

export default generateHome;