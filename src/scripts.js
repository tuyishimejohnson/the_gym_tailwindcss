const navigation = document.querySelector(".navigation-bar");

window.addEventListener("scroll", () => {
    if(window.scrollY > 0) {
        navigation.classList.add("navigation-bar");
    } else {
        navigation.classList.remove("navigation-bar");
    }
})