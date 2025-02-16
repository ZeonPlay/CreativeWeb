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

// Custom Script for Secret Code
let secretCode = "CANWEGETTHEDISCOUNT";
        let input = "";

        document.addEventListener('keydown', function(e) {
            input += e.key.toUpperCase();
            if (input.includes(secretCode)) {
                window.location.href = "https://wa.me/6281278376003?text=IGOTTHESECRET";
            }
            if (input.length > secretCode.length) {
                input = input.slice(-secretCode.length);
            }
        });

function confirmRedirect() {
    return confirm("Anda akan diarahkan ke Gmail untuk mengirim email. Apakah Anda ingin melanjutkan?");
}