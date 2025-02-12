// Animate cards on page load
document.addEventListener('DOMContentLoaded', () => {
    const initialCategory = document.querySelector('.category.active');
    const serviceCards = initialCategory.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 200); // Delay each card's animation
    });
});

// Animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = 1;
        }, index * 200);
    });
});

// Objek berisi pengertian dalam beberapa bahasa
const definitions = {
    moghrap: {
        en: "Moghrap is a fictional concept representing innovation and creativity.",
        id: "Moghrap adalah konsep fiksi yang mewakili inovasi dan kreativitas."
    },
    editing: {
        en: "Video editing is the process of manipulating and rearranging video shots to create a new work.",
        id: "Editing video adalah proses mengedit dan menyusun ulang video untuk menciptakan karya baru."
    },
    minecraft: {
        en: "Minecraft Coding involves creating modifications and scripts to enhance gameplay.",
        id: "Minecraft Coding melibatkan pembuatan modifikasi dan skrip untuk meningkatkan gameplay."
    },
    blockbench: {
        en: "Blockbench is a 3D modeling program for creating Minecraft models.",
        id: "Blockbench adalah program pemodelan 3D untuk membuat model di Minecraft."
    }
};

// Fungsi untuk mendapatkan bahasa sistem
function getLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.startsWith('id') ? 'id' : 'en'; // Default ke bahasa Inggris jika bukan Indonesia
}

// Fungsi untuk menampilkan pengertian sesuai bahasa pengguna
function showDefinition(category) {
    const userLang = getLanguage();
    const definitionText = definitions[category][userLang];
    
    document.getElementById('definition-text').textContent = definitionText;
}

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-slide-in");

    elements.forEach(el => {
        el.classList.add("show"); // Tambahkan class 'show' agar animasi jalan
    });
});