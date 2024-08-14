
// Check if the URL ends with .html
if (window.location.pathname.endsWith('.html')) {
    // Remove .html extension and redirect
    window.location.replace(window.location.pathname.slice(0, -5));
}