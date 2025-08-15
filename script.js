// Get the current page URL
const currentPage = window.location.pathname.split("/").pop();
console.log("Current Page:", currentPage);

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Loop through links and set the active class
navLinks.forEach(link => {
  // Extract the href from the link
  const linkPage = link.getAttribute('href');

  // Check if the current page matches the link's href
  if (linkPage === currentPage) {
    link.classList.add('active'); // Add the active class
  }
});