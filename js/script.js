// Toggle mobile menu

document.addEventListener('DOMContentLoaded', function()
{
    const toggleButton = document.querySelector('.nav-bar .mobile-menu-toggle');
    const mobilemenu = document.querySelector('.nav-bar .mobile-menu-items');
    toggleButton.addEventListener('click', function()
    {
       mobilemenu.classList.toggle('active');
    });
});

//Change in navbar background on scroll
window.addEventListener('scroll', function ()
{

    const navbar = document.querySelector('.nav-bar');
    if(window.scrollY > 0)
    {
        navbar.classList.add('nav-bar-scroll');
    }
    else
    {
        navbar.classList.remove('nav-bar-scroll');
    }
});