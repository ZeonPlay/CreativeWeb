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
        en: `Mograph is short for "motion graphics." 
        This is a design technique that combines graphic elements with animation to create dynamic and interesting visual works. 
        Motion graphics are often used in videos, presentations, and various digital media to explain concepts, support narratives, or add engaging visual effects.`,
        id: `Mograph adalah kependekan dari "motion graphics." 
        Ini adalah teknik desain yang menggabungkan elemen grafis dengan animasi untuk menciptakan karya visual yang dinamis dan menarik. 
        Motion graphics sering digunakan dalam video, presentasi, dan berbagai media digital untuk menjelaskan konsep, mendukung narasi, 
        atau menambahkan efek visual yang memikat.`
    },
    editing: {
        en: `Video editing is the process of changing and compiling videos to achieve the desired results. 
        This can involve cutting video clips, adding music or sound, providing visual effects and transitions, and arranging the clips into a coherent narrative.`,
        id: `Video editing adalah proses mengubah dan menyusun video untuk mencapai hasil yang diinginkan. 
        Ini bisa melibatkan pemotongan klip video, menambahkan musik atau suara, memberikan efek visual dan transisi, serta menyusun klip-klip tersebut menjadi sebuah narasi yang koheren.`
    },
    minecraft: {
        en: `Minecraft coding script is a way to program and organize behavior in the Minecraft game using a programming language. 
        By using scripts, players can make modifications to the game, such as adding new features, changing game mechanics, or even creating their own mini games.`,
        id: `Minecraft coding script adalah cara untuk memprogram dan mengatur perilaku dalam permainan Minecraft menggunakan bahasa pemrograman. 
        Dengan menggunakan script, pemain dapat membuat modifikasi pada permainan, seperti menambahkan fitur baru, mengubah mekanika permainan, atau bahkan membuat mini game sendiri.`
    },
    blockbench: {
        en: `Modeling in Blockbench is the process of creating and editing 3D models using the tools available in the software. 
        Blockbench is a 3D editor tool designed for creating low-poly models, which are often used in games like Minecraft.`,
        id: `Modeling di Blockbench adalah proses menciptakan dan mengedit model 3D dengan menggunakan alat yang tersedia di dalam perangkat lunak tersebut. 
        Blockbench adalah alat editor 3D yang dirancang untuk membuat model low-poly, yang sering digunakan dalam permainan seperti Minecraft.`
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

// Fungsi untuk menampilkan video sesuai kategori
function showDefinition(category) {
    const userLang = getLanguage();
    const definitionText = definitions[category][userLang];
    
    document.getElementById('definition-text').textContent = definitionText;

    // Sembunyikan semua video terlebih dahulu
    document.querySelectorAll('.video-container').forEach(video => {
        video.style.display = 'none';
    });

    // Tampilkan video yang sesuai dengan kategori
    const videoId = `${category}-video`;
    const videoContainer = document.getElementById(videoId);
    if (videoContainer) {
        videoContainer.style.display = 'block';
    }
}

// Sembunyikan semua video saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.video-container').forEach(video => {
        video.style.display = 'none';
    });
});

document.addEventListener('click', function(event) {
    var lightbox = document.getElementById('lightbox');
    if (event.target === lightbox) {
        window.location.hash = '';
    }
});