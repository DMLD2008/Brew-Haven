const sections = document.querySelectorAll("section")



const fadeInObserver = new IntersectionObserver ((entries) => {
    entries.forEach (entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show")
        }
    })
}, {
    threshold: 0.2
}
);

sections.forEach(section => {
    fadeInObserver.observe(section)
});