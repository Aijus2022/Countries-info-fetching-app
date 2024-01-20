// Function to handle question answer and close modal
function handleQuestionAnswer() {
  // Process the answer here
  // ...

  // Close the video modal
  closeVideoModal();
}

// Function to open the video modal
function openVideoModal() {
  document.getElementById('videoModal').style.display = 'block';
}

// Function to close the video modal
function closeVideoModal() {
  document.getElementById('videoModal').style.display = 'none';
}

// Event listener to open the video modal on page load (you can trigger it based on your application logic)
document.addEventListener('DOMContentLoaded', function () {
  // Open the video modal after a delay (adjust the delay based on your preference)
  setTimeout(openVideoModal, 200);
});

