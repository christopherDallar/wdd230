// Variables
const currentYear = new Date().getFullYear();

// Elements
const pCopyright = document.querySelector("footer p:first-child");
const pLastModified = document.querySelector("#lastModified");

// Render
pCopyright.textContent = `&copy; ${currentYear}, Christopher, Venezuela.`;
pLastModified.textContent = document.lastModified;
