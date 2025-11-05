// Login Form Handler
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Simulate login
    console.log('Login attempt:', { email, password });
    
    // Store mock session
    localStorage.setItem('bartr_user', JSON.stringify({
      email: email,
      name: 'John Doe',
      avatar: 12,
      verified: true
    }));
    
    // Show success message
    showSuccessToast('Login successful! Redirecting...');
    
    // Redirect to dashboard
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  });
}

// Signup Form Handler
const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstname = document.getElementById('signup-firstname').value;
    const lastname = document.getElementById('signup-lastname').value;
    const email = document.getElementById('signup-email').value;
    const phone = document.getElementById('signup-phone').value;
    const location = document.getElementById('signup-location').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    
    // Validate passwords match
    if (password !== confirmPassword) {
      showErrorToast('Passwords do not match!');
      return;
    }
    
    // Validate password length
    if (password.length < 8) {
      showErrorToast('Password must be at least 8 characters!');
      return;
    }
    
    // Simulate signup
    console.log('Signup attempt:', { firstname, lastname, email, phone, location });
    
    // Store mock session
    localStorage.setItem('bartr_user', JSON.stringify({
      email: email,
      name: `${firstname} ${lastname}`,
      avatar: Math.floor(Math.random() * 70),
      verified: false,
      location: location,
      phone: phone
    }));
    
    // Show success message
    showSuccessToast('Account created! Redirecting...');
    
    // Redirect to verification
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  });
}

// Toast notifications
function showSuccessToast(message) {
  const toast = document.createElement('div');
  toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg z-[2000] animate-fade-in';
  toast.innerHTML = `
    <div class="flex items-center gap-3">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <div>
        <div class="font-bold">${message}</div>
      </div>
    </div>
  `;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function showErrorToast(message) {
  const toast = document.createElement('div');
  toast.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-4 rounded-xl shadow-lg z-[2000] animate-fade-in';
  toast.innerHTML = `
    <div class="flex items-center gap-3">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
      <div>
        <div class="font-bold">${message}</div>
      </div>
    </div>
  `;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Check if user is logged in
function checkAuth() {
  const user = localStorage.getItem('bartr_user');
  return user ? JSON.parse(user) : null;
}

// Logout function
function logout() {
  localStorage.removeItem('bartr_user');
  window.location.href = 'login.html';
}

console.log('Auth system loaded successfully!');
