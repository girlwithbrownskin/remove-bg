document.addEventListener("DOMContentLoaded", function () {
    // Navbar Toggle for Mobile
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (navToggle) {
        navToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Dropdown Handling
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("mouseenter", function () {
            this.querySelector(".dropdown-menu").style.display = "block";
        });

        dropdown.addEventListener("mouseleave", function () {
            this.querySelector(".dropdown-menu").style.display = "none";
        });
    });

    // Image Selection Handling
    const sampleImages = document.querySelectorAll(".image-list img");
    sampleImages.forEach((img) => {
        img.addEventListener("click", function () {
            alert("You selected an image!");
        });
    });

    // File Upload Handling
    const uploadButton = document.querySelector(".upload-btn");
    if (uploadButton) {
        uploadButton.addEventListener("click", function () {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";
            input.click();

            input.addEventListener("change", function () {
                if (input.files.length > 0) {
                    alert("File uploaded: " + input.files[0].name);
                }
            });
        });
    }

    // Before/After Image Slider
    const slider = document.querySelector(".slider");
    const beforeImage = document.querySelector(".comparison-image .after");

    if (slider && beforeImage) {
        let isDragging = false;

        slider.addEventListener("mousedown", function (e) {
            isDragging = true;
        });

        document.addEventListener("mouseup", function () {
            isDragging = false;
        });

        document.addEventListener("mousemove", function (e) {
            if (isDragging) {
                let sliderRect = slider.parentElement.getBoundingClientRect();
                let position = ((e.pageX - sliderRect.left) / sliderRect.width) * 100;

                if (position > 100) position = 100;
                if (position < 0) position = 0;

                beforeImage.style.width = position + "%";
                slider.style.left = position + "%";
            }
        });
    }
});
