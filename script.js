const chatToggle = document.querySelector('.chatbot-header');
const chatbotContainer = document.querySelector('.chatbot-container');
const preferencesDropdown = document.getElementById('preferences');
const settingsDropdown = document.getElementById('settings');

chatToggle.addEventListener('click', () => {
    chatbotContainer.classList.toggle ('active'); // Toggles visibility
});

function togglePreferences() {
    preferencesDropdown.classList.toggle('active'); // Toggles preferences dropdown
}

function toggleSettings() {
    settingsDropdown.classList.toggle('active'); // Toggles settings dropdown
}

function changeLanguage(lang) {
    // Logic to change the language of the page
    alert(`Language changed to ${lang}`);
}

function navigateTo(section) {
    if (section === 'about') {
        window.location.href = 'about.html'; // Redirect to about page
    }
}

function showRentalDetails(rentalId) {
    // Logic to show rental details in a modal or new section
    alert(`Showing details for ${rentalId}`);
}

function toggleChat() {
    chatbotContainer.classList.toggle('active'); // Toggles chatbot visibility
}