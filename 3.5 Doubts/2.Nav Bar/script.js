 const toggler = document.getElementById('toggler');
 const navLinks = document.getElementById('nav-links');

//  When we will click toggle it will add active class to navlinks so that they get visible in the page

 toggler.addEventListener('click',()=> {
    navLinks.classList.toggle('active');
 })