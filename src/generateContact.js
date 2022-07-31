function generateContact(){
    const contentDiv = document.getElementById('content');

    const title = document.createElement('h1');
    title.classList.add('pageTitle');
    title.innerText = 'Contact Us!';
    contentDiv.appendChild(title);
    
    const contactItem = (name, link, anchorText) => {
        const div = document.createElement('div');
        div.classList.add('contactItems');
        div.textContent = `${name}`;

        const a = document.createElement('a');
        a.classList.add('contactLink');
        a.textContent = anchorText;
        a.href = link;
        div.appendChild(a);

        contentDiv.append(div);
    }

    contactItem('Email:', 'mailto:dummyemail@gmail.com', 'dummyemail@gmail.com');
    contactItem('LinkedIn:', 'https://www.linkedin.com/in/zachary-hill/', 'https://www.linkedin.com/in/zachary-hill/');
    contactItem('Github:', 'https://github.com/zac-h', 'zac-h')

}

export default generateContact;