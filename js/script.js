// $(function () {
//     $(".the-toggler").on ("click" , function () {
//         $(".nav-bar").slidetoggle();
//     }) ;
// });



//   


const button = document.querySelector('.the-toggler');
const navBar = document.querySelector(' .nav-bar ');
button.addEventListener('click', () => {
    if (navBar.style.display === "block") {
        navBar.style.display = "none"
    } else {
        navBar.style.display = "block"
    }
});