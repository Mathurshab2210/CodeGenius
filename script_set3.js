const container = document.querySelector('.container');
const cButton = document.getElementById('cButton');
const javaButton = document.getElementById('javaButton');
const pythonButton = document.getElementById('pythonButton');

// Map buttons to their respective content files
const contentFiles = {
    c: 'solutions/set3c.txt',
    java: 'solutions/set3java.txt',
    python: 'solutions/set3python.txt',
};

// Function to load content from a file
function loadContent(language) {
    const filename = contentFiles[language];
    fetch(filename)
        .then(response => response.text())
        .then(data => {
            container.innerHTML = data;
        })
        .catch(error => {
            console.error(`Error loading content for ${language}: ${error}`);
        });
}

// Display content when a button is clicked
cButton.addEventListener('click', () => {
    loadContent('c');
});

javaButton.addEventListener('click', () => {
    loadContent('java');
});

pythonButton.addEventListener('click', () => {
    loadContent('python');
});
document.addEventListener("DOMContentLoaded", function () {
    // After 5 seconds, remove the animation class
    setTimeout(function () {
        const h1 = document.querySelector(".animate-heading");
        h1.classList.remove("animate-heading");
    }, 5000);
});