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

