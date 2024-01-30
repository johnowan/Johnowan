document.addEventListener('DOMContentLoaded', function () {
    // Get the modal and overlay elements
    var modal = document.getElementById('imageModal');
    var overlay = document.getElementById('overlay');
    var modalImage = document.getElementById('modalImage');

    // Get all the images on the page
    var images = document.querySelectorAll('.gallery-image'); // Updated class name

    // Attach click event listeners to each image
    images.forEach(function (image) {
        image.addEventListener('click', function () {
            // Display the modal and overlay
            modal.style.display = 'block';
            overlay.style.display = 'block';

            // Set the clicked image as the source for the modal
            modalImage.src = image.src;
        });
    });

    // Close the modal when clicking outside the image
    overlay.addEventListener('click', function () {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });
});
