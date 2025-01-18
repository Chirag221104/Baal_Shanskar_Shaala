// Function to signup
async function signup() {
    const data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    };
  
    const response = await fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  
    const result = await response.json();
    console.log(result);
  }
  
  // Function to signin
  async function signin() {
    const data = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    };
  
    const response = await fetch('http://localhost:5000/api/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  
    const result = await response.json();
    console.log(result);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded!');
  });