document.querySelectorAll(".faqbox").forEach(faq => {
    faq.addEventListener("click", () => {
        // Toggle active class for clicked faqbox
        faq.classList.toggle("active");

        // Collapse other open FAQ boxes
        document.querySelectorAll(".faqbox").forEach(otherFaq => {
            if (otherFaq !== faq && otherFaq.classList.contains("active")) {
                otherFaq.classList.remove("active");
            }
        });
    });
});