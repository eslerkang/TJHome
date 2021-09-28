//Function for managing change of pages(home, about, contact) and change of underline-decoration of menu
function visibility(e) {
    value = e.text.toLowerCase();
    [...document.getElementsByClassName("articles")].map(item => {
        item.style.display="none";
    });
    [...document.getElementsByClassName("menu__button")].map(item => {
        item.className = "menu__button";
        
    })
    document.getElementById(value).style.display="flex";
    e.className="menu__button under";
}

//Function for copying email address at clipboard
function copyEmail() {
    t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = 'eslerkang@gmail.com';
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
    alert('E-Mail has been copied!');
}
