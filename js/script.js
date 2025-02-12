function showCategory(categoryId) {
    // Hide all categories
    document.querySelectorAll('.category').forEach(cat => {
        cat.classList.remove('active');
    });

    // Remove active class from all buttons
    document.querySelectorAll('.nav-button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected category
    const selectedCategory = document.getElementById(categoryId);
    selectedCategory.classList.add('active');

    // Add active class to clicked button
    event.target.classList.add('active');

    // Animate service cards in the selected category
    const serviceCards = selectedCategory.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 200); // Delay each card's animation
    });
}