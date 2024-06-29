// Listen for messages from the extension popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'hideImages') {
        // Hide all images on the webpage
        var images = document.querySelectorAll('img');
        images.forEach(function (image) {
            image.style.display = 'none';
        });
    }

    if (request.action === 'highlightLinks') {
        var links = document.querySelectorAll('a');
        var color = request.color || 'red'; // Default color
        links.forEach(function (link) {
            link.style.borderBottom = `2px solid ${color}`;
        });
    }

    if (request.action === 'changeContrast') {
        var value = request.value;
        // Example: Change contrast
        document.body.style.filter = `contrast(${value}%)`;
    }
});
