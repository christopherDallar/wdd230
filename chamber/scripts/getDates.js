// Variables
const currentYear = new Date().getFullYear();

// Elements
const pLastModified = document.querySelector("#lastModified");

// Render
pLastModified.textContent = `Last Modification: ${document.lastModified}`;
