import $ from "jquery";
// Initialize the button in the root element
const rootApp = $("#root");
rootApp.html('<button>ON</button>');

// __define-ocg__ - Function to handle button toggle
function toggleButton() {
    var varOcg = $("#root button"); // Select the button using jQuery
    
    // Check the current state and toggle accordingly
    if (varOcg.text() === 'ON') {
        varOcg.text('OFF'); // Change text to OFF
        varOcg.addClass('off'); // Add OFF class for styling
    } else {
        varOcgtext('ON'); // Change text to ON
        varOcg.removeClass('off'); // Remove OFF class for styling
    }
}

// Attach the click event listener to the button
$(document).ready(function() {
    $("#root button").on('click', toggleButton);
});
