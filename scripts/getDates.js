// Variables
const currentYear = new Date().getFullYear();

// Elements
const pCopyright = document.querySelector("footer p:first-child");
const pLastModified = document.querySelector("#lastModified");

// Render
pCopyright.innerHTML = `&copy; ${currentYear}, Christopher, Venezuela <span>🇻🇪</span>`;
pLastModified.textContent = `Last Modification: ${document.lastModified}`;
