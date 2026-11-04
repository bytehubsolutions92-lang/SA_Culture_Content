
// ==========================================
// SA CULTURE CONTENT - MAIN JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // --------------------------------------
    // 1. SEARCH TOURS
    // --------------------------------------

    const searchInput = document.getElementById("tourSearch");
    const tourRows = document.querySelectorAll("#tourRows tr");
    const noResults = document.getElementById("noResults");

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const searchValue = searchInput.value.toLowerCase().trim();
            let visibleCount = 0;

            tourRows.forEach(function (row) {

                const tourName = row.cells[0].textContent.toLowerCase();

                if (tourName.includes(searchValue)) {
                    row.hidden = false;
                    visibleCount++;
                } else {
                    row.hidden = true;
                }

            });

            if (noResults) {
                noResults.hidden = visibleCount !== 0;
            }

        });

    }


    // --------------------------------------
    // 2. WHATSAPP TOUR ENQUIRIES
    // --------------------------------------

    const enquiryButtons = document.querySelectorAll(".enquire-button");

    enquiryButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const tourName = button.dataset.tour;

            const message =
                "Hello SA Culture Content! " +
                "I would like to enquire about the " +
                tourName +
                ". Please share availability and booking details.";

            const whatsappNumber = "27849081725";

            const whatsappLink =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(message);

            window.open(whatsappLink, "_blank");

        });

    });


    // --------------------------------------
    // 3. MOBILE NAVIGATION MENU
    // --------------------------------------

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

        const navigationLinks = navigation.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");

            });

        });

    }


    // --------------------------------------
    // 4. AUTOMATIC COPYRIGHT YEAR
    // --------------------------------------

    const yearElement = document.getElementById("year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }


    // --------------------------------------
    // 5. CONSOLE MESSAGE
    // --------------------------------------

    console.log("SA Culture Content website loaded successfully!");

});
