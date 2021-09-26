function visibility(e) {
    value = e.text.toLowerCase();
    [...document.getElementsByClassName("articles")].map(item => {
        item.style.display="none";
        return 0;
    });
    [...document.getElementsByClassName("menu__button")].map(item => {
        item.style.textDecoration="none";
        return 0;
    })
    document.getElementById(value).style.display="flex";
    e.style.textDecoration="underline";
    e.style.textDecorationColor="white";
}
