// Show Contact Form
document.getElementById('contactBtn').addEventListener('click', function() {
  document.getElementById('contactForm').style.display = 'block';
});

// Close Contact Form
document.getElementById('closeBtn').addEventListener('click', function() {
  document.getElementById('contactForm').style.display = 'none';
});

// Form Submission
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic validation
  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('form').reset(); // Clear form
    document.getElementById('contactForm').style.display = 'none'; // Close form
  } else {
    alert('Please fill out all fields.');
  }
});

// Redirect to About Me Page
document.getElementById('aboutBtn').addEventListener('click', function() {
  window.location.href = 'about.html'; // Replace with your About Me page path
});

// Redirect to Experience Page
document.getElementById('experienceBtn').addEventListener('click', function() {
  window.location.href = 'experience.html'; // Replace with your Experience page path
});

// Redirect to Expertise Page
document.getElementById('expertiseBtn').addEventListener('click', function() {
  window.location.href = 'expertise.html'; // Replace with your Expertise page path
});
// Redirect to Expertise Page
document.getElementById('eventBtn').addEventListener('click', function() {
  window.location.href = 'event.html'; // Replace with your Expertise page path
});
