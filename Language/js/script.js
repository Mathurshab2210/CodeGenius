// Get a reference to the select element
const languageDropdown = document.getElementById('language-dropdown');

// Add an event listener to handle option selection
languageDropdown.addEventListener('change', function() {
    const selectedOption = this.value;
    
    // Redirect to the appropriate web page based on the selected option
    switch (selectedOption) {
        case 'python':
            window.location.href = 'py.html'; // Replace with the actual URL for the Python page
            break;
        case 'java':
            window.location.href = '#'; // Replace with the actual URL for the Java page
            break;
        case 'c':
            window.location.href = '#'; // Replace with the actual URL for the C page
            break;
        default:
            // Handle other cases or add a default action
    }
});

// JavaScript for dynamically loading content into sections
window.addEventListener('DOMContentLoaded', () => {
    const definitionContent = document.getElementById('definition-content');
    const featuresContent = document.getElementById('features-content');
    const limitationsContent = document.getElementById('limitations-content');
    const flavorContent = document.getElementById('flavor-content');
    const cnt1 = document.getElementById('cnt1-content');
    const cnt2 = document.getElementById('cnt2-content');
    const cnt3 = document.getElementById('cnt3-content');

    // Load content from text files
    fetch('../Notes/pydef.txt')
        .then(response => response.text())
        .then(data => definitionContent.innerHTML= data);

    fetch('../Notes/featurespy.txt')
        .then(response => response.text())
        .then(data => featuresContent.innerHTML = data);

    fetch('../Notes/limitationpy.txt')
        .then(response => response.text())
        .then(data => limitationsContent.innerHTML= data);

    fetch('../Notes/fpy.txt')
        .then(response => response.text())
        .then(data => flavorContent.innerHTML = data);
    fetch('../Notes/cnt1.txt')
        .then(response => response.text())
        .then(data => cnt1.innerHTML = data);
    fetch('../Notes/cnt2.txt')
        .then(response => response.text())
        .then(data => cnt2.innerHTML = data);
    fetch('../Notes/cnt3.txt')
        .then(response => response.text())
        .then(data => cnt3.innerHTML = data);
});

// JavaScript for the "Next Page" link
document.querySelector('a[href="#page2"]').addEventListener('click', (e) => {
    e.preventDefault();
    // Redirect to the next page (create a new HTML page for Page 2)
    window.location.href = 'py2.html';
});

const showQuizButton = document.getElementById("show-quiz-button");
const quizContainer = document.getElementById("quiz-container");
const quizForm = document.getElementById("quiz-form");
const resultsDiv = document.getElementById("results");
const collapseQuizButton = document.getElementById("collapse-quiz-button");

showQuizButton.addEventListener("click", function () {
    showQuizButton.style.display = "none";
    quizContainer.style.display = "block";
    resultsDiv.innerHTML = ''; // Clear previous results
    quizForm.reset(); // Reset the form
});

quizForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const answers = ["a", "c", "b"]; // Correct answers
    let score = 0;

    for (let i = 1; i <= 3; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer) {
            if (selectedAnswer.value === answers[i - 1]) {
                score++;
            }
        }
    }

    resultsDiv.innerHTML = `You scored ${score} out of 3.`;

    for (let i = 1; i <= 3; i++) {
        const correctAnswer = answers[i - 1];
        resultsDiv.innerHTML += `<br>Question ${i}: Correct Answer is ${correctAnswer}`;
    }

    quizForm.reset(); // Reset the form after displaying the results.

    collapseQuizButton.style.display = "block";
    quizForm.reset(); // Reset the form after displaying the results
});

collapseQuizButton.addEventListener("click", function () {
    quizContainer.style.display = "none";
    showQuizButton.style.display = "block";
    collapseQuizButton.style.display = "none";
});

        const showQuizButton2 = document.getElementById("show-quiz-button2");
        const quizContainer2 = document.getElementById("quiz-container2");
        const quizForm2 = document.getElementById("quiz-form2");
        const resultsDiv2 = document.getElementById("results2");
        const collapseQuizButton2 = document.getElementById("collapse-quiz-button2");

        showQuizButton2.addEventListener("click", function () {
            showQuizButton2.style.display = "none";
            quizContainer2.style.display = "block";
        });

        quizForm2.addEventListener("submit", function (e) {
            e.preventDefault();
            const answers = ["a", "c", "c", "b", "c", "b", "a"]; // Correct answers
            let score = 0;

            for (let i = 1; i <= 7; i++) {
                const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
                if (selectedAnswer) {
                    if (selectedAnswer.value === answers[i - 1]) {
                        score++;
                    }
                }
            }

            resultsDiv2.innerHTML = `You scored ${score} out of 7.`;

            for (let i = 1; i <= 7; i++) {
                const correctAnswer = answers[i - 1];
                resultsDiv2.innerHTML += `<br>Question ${i}: Correct Answer is ${correctAnswer}`;
            }

            collapseQuizButton2.style.display = "block";
            quizForm2.reset(); // Reset the form after displaying the results
        });

        collapseQuizButton2.addEventListener("click", function () {
            quizContainer2.style.display = "none";
            showQuizButton2.style.display = "block";
            resultsDiv2.innerHTML = "";
            collapseQuizButton2.style.display = "none";
        });
   
