function visibility(e) {
    value = e.text.toLowerCase();
    [...document.getElementsByClassName("articles")].map(item => {
        item.style.display="none";
    });
    [...document.getElementsByClassName("menu__button")].map(item => {
        item.style.textDecoration="none";
    })
    document.getElementById(value).style.display="flex";
    e.style.textDecoration="underline";
    e.style.textDecorationColor="white";
}