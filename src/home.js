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