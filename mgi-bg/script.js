// JavaScript code in script.js
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the form element
    const contactForm = document.querySelector('.contact-form');

    // Add event listener for form submission
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        // Retrieve the input values
        const nameInput = document.getElementById('name').value;
        const emailInput = document.getElementById('email').value;
        const messageInput = document.getElementById('message').value;
    });
});
function downloadTextFile(content, filename) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameInput = document.getElementById('name').value;
        const emailInput = document.getElementById('email').value;
        const messageInput = document.getElementById('message').value;

        const content = `Name: ${nameInput}\nEmail: ${emailInput}\nMessage: ${messageInput}`;

        // Generate the text file for download
        downloadTextFile(content, 'contact_info.txt');

    });
});
