//function for the skills scroll cards in the home page
const scrollCards = direction =>{
    const scrollContainer = document.getElementById("card-scroll-container");
    const scrollAmount = 430;
    if (direction === 'left') {
        scrollContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        scrollContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');
const container = document.getElementById('projectsContainer');

// Scroll by 300px on button click
scrollLeftBtn.addEventListener('click', () => {
    container.scrollBy({
        left: -430,
        behavior: 'smooth'
    });
});

scrollRightBtn.addEventListener('click', () => {
    container.scrollBy({
        left: 430,
        behavior: 'smooth'
    });
});

