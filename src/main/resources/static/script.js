let sidebar = document.getElementById('sidebar');
let nav1 = document.getElementById('side');

sidebar.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up to the document
    if (nav1.style.display === 'none' || nav1.style.display === '') {
        nav1.style.display = 'block';
    } else {
        nav1.style.display = 'none';
    }
});

document.addEventListener('click', (event) => {
    let isClickInsideSidebar = sidebar.contains(event.target);
    let isClickInsideNav = nav1.contains(event.target);
    if (!isClickInsideSidebar && !isClickInsideNav) {
        nav1.style.display = 'none';
    }
});








let skill = document.getElementById('skill');
let education = document.getElementById('Education');
let About_button = document.getElementById('butt');

let About_button_sk = document.getElementById('sk');
let About_button_ed = document.getElementById('ed');

About_button.addEventListener('click', (event) => {
    const targetText = event.target.textContent;

    if (targetText === 'Skills') {
        setTimeout(() => {
            skill.style.display = 'block';
            education.style.display = 'none';
            About_button_ed.classList.remove('active');
            About_button_sk.classList.add('active');
        }, 200);
    }

    else if (targetText === 'Education') {
        setTimeout(() => {
            education.style.display = 'block';
            skill.style.display = 'none';
            About_button_sk.classList.remove('active');
            About_button_ed.classList.add('active');
        }, 200);
    }
});

// ---------------------------------------MY Work ---------------------------------
let show_more = document.getElementById('show_more');
let shadow = document.getElementById('shadow');
let Portfolio = document.getElementById('Portfolio');
show_more.addEventListener('click', (event) => {
    if (event.target.textContent == 'See more') {
        show_more.innerHTML = "See less";
        Portfolio.style.height = 'auto';
        shadow.style.display = 'none';
    }
    else {
        Portfolio.style.height = '100vh';
        show_more.innerHTML = "See more";
        shadow.style.display = 'block';
    }
});










// ---------------------------------
document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault();//it prevent to reload the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('msg').value;

    const response = await fetch('http://localhost:8080/feedback/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    });

    if (response.ok) {
        alert('Message sent successfully!');
    } else {
        alert('Failed to send message.');
    }
});

// 

document.getElementById('theme').addEventListener('click', function () {

    let image = document.getElementById('theme_img');
    if (image.src.includes("Night")) {
        image.src = "./images/Light mode.png";
    } else {
        image.src = "./images/Night mode.png";
    }


    const root = document.documentElement;
    const currentBgColor = getComputedStyle(root).getPropertyValue('--bgcolor').trim();
    const newBgColor = currentBgColor === 'black' ? 'rgb(239, 239, 239)' : 'black';
    const newTextColor = currentBgColor === 'black' ? 'black' : 'white';

    root.style.setProperty('--bgcolor', newBgColor);
    root.style.setProperty('--textcolor', newTextColor);
});

