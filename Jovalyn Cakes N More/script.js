// Function to open the search modal
function openSearch() {
    document.getElementById("searchModal").style.display = "block";
}

// Function to close the search modal
function closeSearch() {
    document.getElementById("searchModal").style.display = "none";
}

// Placeholder function for search action (you can implement actual search functionality here)
function searchFunction() {
    const searchQuery = document.getElementById("searchInput").value;
    alert("Searching for: " + searchQuery);
    closeSearch(); // Close the search modal after search
}


// Function to toggle the menu
function toggleMenu() {
    var menu = document.getElementById("menuLinks");

    // Toggle the display of the menu links
    if (menu.style.display === "flex") {
        menu.style.display = "none"; // Hide the menu
    } else {
        menu.style.display = "flex"; // Show the menu
    }
}

// Function to open the profile modal
function openProfileModal() {
    document.getElementById("profileModal").style.display = "block";
}

// Function to close the profile modal
function closeProfileModal() {
    document.getElementById("profileModal").style.display = "none";
}

// Toggle between Sign Up and Log In forms
function showSignUp() {
    document.getElementById("signUpForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}

function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signUpForm").style.display = "none";
}

// Placeholder function for Sign Up
function signUp() {
    const username = document.getElementById("signUpUsername").value;
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;
    alert("Signed up with username: " + username + ", email: " + email);
    closeProfileModal(); // Close the modal after sign-up (you can implement actual functionality here)
}

// Placeholder function for Log In
function logIn() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    alert("Logged in with email: " + email);
    closeProfileModal(); // Close the modal after login (you can implement actual functionality here)
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const highlightedText = document.querySelector('.highlighted');
    const text = highlightedText.textContent;
    highlightedText.innerHTML = ''; // Clear original text

    // Wrap each letter in a span
    text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter === ' ' ? '\u00A0' : letter; // Add space for actual spaces
        span.style.animationDelay = `${index * 0.1}s`; // Add delay for each letter
        highlightedText.appendChild(span);
    });
});
// Select all images with the hover effect
const hoverImages = document.querySelectorAll('.hover-img');

hoverImages.forEach(img => {
    img.addEventListener('mouseover', () => {
        const originalSrc = img.src;
        img.src = img.getAttribute('data-hover');
        img.setAttribute('data-hover', originalSrc);
    });

    img.addEventListener('mouseout', () => {
        const hoverSrc = img.src;
        img.src = img.getAttribute('data-hover');
        img.setAttribute('data-hover', hoverSrc);
    });
});
