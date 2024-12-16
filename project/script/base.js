document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    form?.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        localStorage.setItem("userName", name);

        confirmationMessage.textContent = `Thank you, ${name}, for registering!`;
        confirmationMessage.style.display = "block";

        form.reset();
    });
});
