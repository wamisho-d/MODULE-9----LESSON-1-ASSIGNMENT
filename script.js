// script.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const formSteps = Array.from(document.querySelectorAll(".form-step"));
    const nextButtons = document.querySelectorAll(".next");
    const prevButtons = document.querySelectorAll(".prev");
    const progressSteps = document.querySelectorAll(".progress-bar .step");
    const successMessage = document.getElementById("successMessage");

    let currentStep = 0;

    // Update form step visibility and progress bar
    function updateFormSteps() {
        formSteps.forEach((step, index) => {
            step.classList.toggle("active", index === currentStep);
            progressSteps[index].classList.toggle("completed", index <= currentStep);
        });
    }

    // Event listeners for "Next" buttons
    nextButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (validateStep()) {
                currentStep++;
                if (currentStep < formSteps.length) {
                    updateFormSteps();
                }
            }
        });
    });

    // Event listeners for "Previous" buttons
    prevButtons.forEach((button) => {
        button.addEventListener("click", () => {
            currentStep--;
            updateFormSteps();
        });
    });

    // Form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        successMessage.style.display = "block";
        form.style.display = "none";
    });

    // Basic step validation
    function validateStep() {
        const inputs = formSteps[currentStep].querySelectorAll("input[required]");
        return Array.from(inputs).every(input => input.checkValidity());
    }

    updateFormSteps(); // Initial form step setup
});
