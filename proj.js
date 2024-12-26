document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Reservation submitted!');
});

document.addEventListener('DOMContentLoaded', function() {
    // This code runs after the DOM is fully loaded
    console.log("DOM fully loaded and parsed");
});
