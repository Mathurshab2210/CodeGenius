


const showQuestionsButton = document.getElementById("show-questions-button");
const closeQuestionsButton = document.getElementById("close-questions-button");
const questionsContainer = document.getElementById("questions-container");

showQuestionsButton.addEventListener("click", function () {
    questionsContainer.style.display = "block";
});

closeQuestionsButton.addEventListener("click", function () {
    questionsContainer.style.display = "none";
  
});
const showQuestionsButton3 = document.getElementById("show-questions-button3");
const closeQuestionsButton3 = document.getElementById("close-questions-button3");
const questionsContainer3 = document.getElementById("questions-container3");

showQuestionsButton3.addEventListener("click", function () {
    questionsContainer3.style.display = "block";
});

closeQuestionsButton3.addEventListener("click", function () {
    questionsContainer3.style.display = "none";
  
});
const closecButton = document.getElementById("closecButton");
const showCSolutionButton = document.getElementById("show-c-solution-button");
        const cModal = document.getElementById("c-modal");

        showCSolutionButton.addEventListener("click", function () {
            cModal.style.display = "block";
        });
        closecButton.addEventListener("click", function () {
            cModal.style.display = "none";
         });

        // JavaScript for toggling the Java Language Solutions
        const showJavaSolutionButton = document.getElementById("show-java-solution-button");
        const javaModal = document.getElementById("java-modal");
        const closejavaButton = document.getElementById("closejavaButton");

        showJavaSolutionButton.addEventListener("click", function () {
            javaModal.style.display = "block";
        });
        closejavaButton.addEventListener("click", function () {
            javaModal.style.display = "none";
         });

        // JavaScript for toggling the Python Language Solutions
        const showPythonSolutionButton = document.getElementById("show-python-solution-button");
        const pythonModal = document.getElementById("python-modal");
        const closepythonButton = document.getElementById("closepythonButton");

        showPythonSolutionButton.addEventListener("click", function () {
            pythonModal.style.display = "block";
        });
        closepythonButton.addEventListener("click", function () {
            pythonModal.style.display = "none";
         });

         const showQuestionsButton2 = document.getElementById("show-questions-button2");
         const closeQuestionsButton2 = document.getElementById("close-questions-button2");
         const questionsContainer2 = document.getElementById("questions-container2");
         
         showQuestionsButton2.addEventListener("click", function () {
             questionsContainer2.style.display = "block";
         });
         
         closeQuestionsButton2.addEventListener("click", function () {
             questionsContainer2.style.display = "none";
           
         });



// JavaScript for toggling the pop-up solutions for Set 2
function loadAndDisplaySolutionc() {
    const modal = document.getElementById(`C-modal-set2`);
    const modalContent = document.querySelector(`#C-modal-set2 .modal-content`);
    
    // Use AJAX to load the solution content from the server
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `solutions/C_solutions_set2.txt`, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            modalContent.innerHTML = `<h4>C Language Solutions (Set 2)</h4>` + xhr.responseText;
            modalContent.innerHTML += '<span class="close-button" onclick="closeModal(\'' + "C"+ '-modal-set2\')">&times;</span>';
            modal.style.display = "block";
        } else {
            modalContent.innerHTML = `<p>Failed to load C solutions.</p>`;
            modal.style.display = "block";
        }
    };
    xhr.send();
}
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}
function loadAndDisplaySolutionjava() {
    const modal = document.getElementById(`java-modal-set2`);
    const modalContent = document.querySelector(`#java-modal-set2 .modal-content`);
    
    // Use AJAX to load the solution content from the server
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `solutions/Java_set2.txt`, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            modalContent.innerHTML = `<h4>java Language Solutions (Set 2)</h4>` + xhr.responseText;
            modalContent.innerHTML += '<span class="close-button" onclick="closeModal(\'' +"java"+ '-modal-set2\')">&times;</span>';
       modal.style.display = "block";
        } else {
            modalContent.innerHTML = `<p>Failed to load java solutions.</p>`;
            modal.style.display = "block";
        }
    };
    xhr.send();
}    function loadAndDisplaySolutionpy() {
    const modal = document.getElementById(`Python-modal-set2`);
    const modalContent = document.querySelector(`#Python-modal-set2 .modal-content`);
    // Use AJAX to load the solution content from the server
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `solutions/python_solution.txt`, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            modalContent.innerHTML = `<h4>Python Language Solutions (Set 2)</h4>` + xhr.responseText;
            modalContent.innerHTML += '<span class="close-button" onclick="closeModal(\'' +"Python"+ '-modal-set2\')">&times;</span>';
       modal.style.display = "block";
        } else {
            modalContent.innerHTML = `<p>Failed to load Python solutions.</p>`;
            modal.style.display = "block";
        }
    };
    xhr.send();
    
}


const showCSolutionButtonSet2 = document.getElementById("show-c-solution-button-set2");
showCSolutionButtonSet2.addEventListener("click", () => loadAndDisplaySolutionc());
const showJavaSolutionButtonSet2 = document.getElementById("show-java-solution-button-set2");
showJavaSolutionButtonSet2.addEventListener("click", () => loadAndDisplaySolutionjava());

const showPythonSolutionButtonSet2 = document.getElementById("show-python-solution-button-set2");
showPythonSolutionButtonSet2.addEventListener("click", () => loadAndDisplaySolutionpy("Python"));


 // Function to show the iframe
 document.getElementById('show-iframe-button').addEventListener('click', function () {
    var iframeContainer = document.getElementById('iframe-container');
    iframeContainer.style.display = 'block';
  });

  // Function to hide the iframe when the "Close" button is clicked
  document.getElementById('close-iframe-button').addEventListener('click', function () {
    var iframeContainer = document.getElementById('iframe-container');
    iframeContainer.style.display = 'none';
  });
// Get references to the buttons
const pythonButton = document.getElementById('python-button');
const javaButton = document.getElementById('java-button');
const cButton = document.getElementById('c-button');

// Add event listeners to the buttons
pythonButton.addEventListener('click', () => {
    window.location.href = 'Language/py.html'; // Replace with the actual URL for the Python page
});

javaButton.addEventListener('click', () => {
    window.location.href = 'java.html'; // Replace with the actual URL for the Java page
});

cButton.addEventListener('click', () => {
    window.location.href = 'c.html'; // Replace with the actual URL for the C page
});
// Function to toggle the message box
function toggleMessage() {
    var messageBox = document.getElementById("message-box");
    var updatesButton = document.getElementById("updates-button");

    if (messageBox.style.display === "block") {
        messageBox.style.display = "none";
        updatesButton.textContent = "Updates";
    } else {
        messageBox.style.display = "block";
        updatesButton.textContent = "Close";
    }
}

// Attach an event listener to the "Updates" button
document.getElementById("updates-button").addEventListener("click", toggleMessage);
