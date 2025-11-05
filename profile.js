// Mock profile data
const profiles = {
  'Sarah Kim': {
    avatar: 45,
    location: 'San Francisco, CA',
    bio: 'Graphic designer and coffee enthusiast. Love trading design work for unique items and experiences. Always looking for vintage cameras and art supplies!',
    rating: 4.9,
    reviews: 47,
    trades: 124,
    joined: 'Jan 2024',
    skills: ['Graphic Design', 'Logo Design', 'Illustration', 'Photography']
  },
  'Alex Chen': {
    avatar: 33,
    location: 'San Francisco, CA',
    bio: 'Tech enthusiast and gadget collector. Always looking to trade electronics and tech gear. Love meeting new people in the community!',
    rating: 4.8,
    reviews: 62,
    trades: 87,
    joined: 'Mar 2024',
    skills: ['Web Development', 'App Development', 'Tech Support', 'Photography']
  },
  'Mike Johnson': {
    avatar: 22,
    location: 'Austin, TX',
    bio: 'Photographer and outdoor enthusiast. Trading photography services for adventure gear and experiences. Let\'s make some great trades!',
    rating: 4.7,
    reviews: 38,
    trades: 52,
    joined: 'Feb 2024',
    skills: ['Photography', 'Video Editing', 'Drone Operation']
  },
  'Emma Davis': {
    avatar: 68,
    location: 'Seattle, WA',
    bio: 'Yoga instructor and wellness coach. Trading classes and wellness services. Passionate about healthy living and community building.',
    rating: 5.0,
    reviews: 89,
    trades: 143,
    joined: 'Dec 2023',
    skills: ['Yoga Instruction', 'Meditation', 'Nutrition Coaching', 'Wellness']
  },
  'David Lee': {
    avatar: 15,
    location: 'Los Angeles, CA',
    bio: 'Music producer and audio engineer. Trading music production services and equipment. Always looking for vintage audio gear!',
    rating: 4.9,
    reviews: 71,
    trades: 96,
    joined: 'Jan 2024',
    skills: ['Music Production', 'Audio Engineering', 'Mixing', 'Mastering']
  }
};

// Load profile from URL parameter
function loadProfile() {
  const urlParams = new URLSearchParams(window.location.search);
  const profileName = urlParams.get('user') || 'Sarah Kim';
  
  const profile = profiles[profileName];
  if (profile) {
    document.getElementById('profile-avatar').src = `https://i.pravatar.cc/150?img=${profile.avatar}`;
    document.getElementById('profile-name').textContent = profileName;
    document.getElementById('profile-location').innerHTML = `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
      ${profile.location}
    `;
    document.getElementById('profile-bio').textContent = profile.bio;
    document.getElementById('profile-rating').textContent = profile.rating;
    document.getElementById('profile-reviews').textContent = profile.reviews;
    document.getElementById('profile-trades').textContent = profile.trades;
    document.getElementById('profile-joined').textContent = profile.joined;
    
    // Update skills
    const skillsContainer = document.querySelector('.skill-tag').parentElement;
    skillsContainer.innerHTML = profile.skills.map(skill => 
      `<span class="skill-tag">${skill}</span>`
    ).join('');
  }
}

// Tab switching
document.querySelectorAll('.profile-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    const tabName = this.getAttribute('data-tab');
    
    // Update active tab
    document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    
    // Update active content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(`${tabName}-tab`).classList.add('active');
  });
});

// View another profile
function viewProfile(name, avatarId) {
  window.location.href = `profile.html?user=${encodeURIComponent(name)}`;
}

// Message modal
function openMessageModal() {
  document.getElementById('quick-message-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMessageModal() {
  document.getElementById('quick-message-modal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

function sendQuickMessage() {
  alert('Message sent! Redirecting to full messaging...');
  window.location.href = 'messaging.html';
}

// Initialize
document.addEventListener('DOMContentLoaded', loadProfile);

console.log('Profile page loaded successfully!');
