let darkMode = localStorage.getItem("darkMode");
const themeSwitcher = document.querySelector(".theme-switcher");
const body = document.body;
const app = document.querySelector(".app");
const animationDuration = 1000;

body.style.setProperty('--animation-duration', `${animationDuration}ms`);
themeSwitcher.style.setProperty('--switching-duration', `${animationDuration}ms`);

themeSwitcher.addEventListener("click", e => {
    darkMode = localStorage.getItem('darkMode');

    if (darkMode) {
        localStorage.removeItem('darkMode');
    } else {
        localStorage.setItem('darkMode', 'darkMode');
    }

    body.classList.toggle("dark");


    themeSwitcher.setAttribute('disabled', 'disabled');
    app.classList.add('animated')
    setTimeout(() => {
        app.classList.remove('animated')
        themeSwitcher.removeAttribute('disabled');
    }, animationDuration)

})

if (darkMode) {
    console.log(darkMode)
    body.classList.add("dark");
}