// Function to load the menu content
function loadMenu(targetElement) {
  fetch('menu.html')
    .then(response => response.text())
    .then(menuHtml => {
      targetElement.innerHTML = menuHtml;
    })
    .catch(error => console.error('Error loading menu:', error));
}


// Function to load the header content
function loadHeader(targetElement) {
  fetch('header.html')
    .then(response => response.text())
    .then(headerHtml => {
      targetElement.innerHTML = headerHtml;
    })
    .catch(error => console.error('Error loading header:', error));
}

// Load the menu and header content into the target elements on page load
document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.getElementById('menu-container');
  const headerContainer = document.getElementById('header-container');
  loadMenu(menuContainer);
  loadHeader(headerContainer);
});
