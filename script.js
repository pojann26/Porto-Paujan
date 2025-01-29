document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                // Remove 'show' class when element scrolls out of view
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px" // You can adjust this value to trigger the animation earlier/later
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => observer.observe(element));
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                // Remove 'show' class when element scrolls out of view
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px"
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => observer.observe(element));
});

document.addEventListener('DOMContentLoaded', () => {
    const texts = [
        "Front-end Developer",
        "Freelancer",
        "Mobile App Dev"
    ];
    const typedTextSpan = document.getElementById("typed-text");
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            // Hapus characters
            typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Ngetik characters
            typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100; // Delete lebih cepet dari ngetik

        // If word is complete
        if (!isDeleting && charIndex === currentText.length) {
            // Wait before starting to delete
            typeSpeed = 2000; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            // Move to next word
            textIndex = (textIndex + 1) % texts.length;
            // Wait a bit before typing next word
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    // Start the typing animation
    type();
});

document.getElementById("hamburger-menu").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("active");
});
