document.addEventListener('DOMContentLoaded', () => {
  console.log('Website loaded!');

  // Simulated user data (for demonstration purposes)
  let users = [];
  let currentUser = null;

  // Check if a user is already logged in
  const token = localStorage.getItem('token');
  if (token) {
    currentUser = JSON.parse(localStorage.getItem('user'));
    updateNavbar(currentUser);
  }

  // Handle Sign Up Form Submission
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const role = document.getElementById('role').value;

      // Simulate user registration
      const newUser = { name, email, password, role };
      users.push(newUser);
      alert('Sign up successful! Please sign in.');
      window.location.href = 'signin.html';
    });
  }

  // Handle Sign In Form Submission
  const signinForm = document.getElementById('signin-form');
  if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Simulate user authentication
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        currentUser = user;
        localStorage.setItem('token', 'simulated-token');
        localStorage.setItem('user', JSON.stringify(user));
        updateNavbar(user);
        alert('Sign in successful!');
        window.location.href = 'profile.html';
      } else {
        alert('Invalid email or password.');
      }
    });
  }

  // Handle Contact Form Submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for contacting us! We will get back to you soon.');
      contactForm.reset();
    });
  }

  // Update Navbar Based on User Role
  function updateNavbar(user) {
    const navLinks = document.querySelector('.nav-links');
    if (user) {
      navLinks.innerHTML = `
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="profile.html" class="btn">Profile</a></li>
        <li><a href="#" class="btn btn-primary" id="logout">Logout</a></li>
      `;
      document.getElementById('logout').addEventListener('click', logout);
    } else {
      navLinks.innerHTML = `
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="signin.html" class="btn">Sign In</a></li>
        <li><a href="signup.html" class="btn btn-primary">Sign Up</a></li>
      `;
    }
  }

  // Logout Functionality
  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    currentUser = null;
    updateNavbar(null);
    alert('Logged out successfully!');
    window.location.href = 'index.html';
  }

  // Load Profile Data
  const profileDetails = document.getElementById('profile-details');
  if (profileDetails) {
    if (currentUser) {
      profileDetails.innerHTML = `
        <p>Name: ${currentUser.name}</p>
        <p>Email: ${currentUser.email}</p>
        <p>Role: ${currentUser.role}</p>
      `;
    } else {
      profileDetails.innerHTML = `<p>Please <a href="signin.html">sign in</a> to view your profile.</p>`;
    }
  }

  // Load Feedback Data (Simulated)
  const feedbackList = document.getElementById('feedback-list');
  if (feedbackList) {
    const feedbacks = [
      { id: 1, feedback: 'Great platform!', date: '2023-10-01' },
      { id: 2, feedback: 'Very helpful.', date: '2023-10-05' },
    ];
    feedbacks.forEach(feedback => {
      const item = document.createElement('div');
      item.className = 'feedback-item';
      item.innerHTML = `
        <p>${feedback.feedback}</p>
        <small>${feedback.date}</small>
      `;
      feedbackList.appendChild(item);
    });
  }

  // Load Complaint Data (Simulated)
  const complaintList = document.getElementById('complaint-list');
  if (complaintList) {
    const complaints = [
      { id: 1, complaint: 'Issue with login.', date: '2023-10-02' },
      { id: 2, complaint: 'Need more features.', date: '2023-10-06' },
    ];
    complaints.forEach(complaint => {
      const item = document.createElement('div');
      item.className = 'complaint-item';
      item.innerHTML = `
        <p>${complaint.complaint}</p>
        <small>${complaint.date}</small>
      `;
      complaintList.appendChild(item);
    });
  }

  // Load Test Data (Simulated)
  const testList = document.getElementById('test-list');
  if (testList) {
    const tests = [
      { id: 1, testName: 'Math Test', score: 85, date: '2023-10-03' },
      { id: 2, testName: 'Science Test', score: 90, date: '2023-10-07' },
    ];
    tests.forEach(test => {
      const item = document.createElement('div');
      item.className = 'test-item';
      item.innerHTML = `
        <p>${test.testName}: ${test.score}%</p>
        <small>${test.date}</small>
      `;
      testList.appendChild(item);
    });
  }
});