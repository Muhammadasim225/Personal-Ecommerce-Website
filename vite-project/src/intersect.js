const section_hero = document.querySelector(".tought");
const nav_header = document.querySelector(".sticket");

const observer = new IntersectionObserver((entries) => {
    const ent = entries[0];
    console.log(ent);
    ent.isIntersecting=false?nav_header.classList.add('scrolled'):
    nav_header.classList.remove('scrolled')
   
}, {
    root: null,
    threshold: 0, // Adjust the threshold as needed
});

observer.observe(section_hero);
