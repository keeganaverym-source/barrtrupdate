let currentRating = 0;
let currentTrader = '';

function openConversation(name, avatar) {
  // Update chat header
  document.querySelector('.chat-header img').src = avatar;
  document.querySelector('.chat-header h3').textContent = name;
  
  // Mark conversation as active
  document.querySelectorAll('.conversation-item').forEach(item => {
    item.classList.remove('active');
  });
  event.currentTarget.classList.add('active');
  
  // Clear unread badge
  const badge = event.currentTarget.querySelector('.unread-badge');
  if (badge) {
    badge.remove();
  }
}

function sendMessage() {
  const input = document.getElementById('message-input');
  const message = input.value.trim();
  
  if (message) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageHTML = `
      <div class="message-sent">
        <div class="message-bubble message-bubble-sent">
          <p>${message}</p>
          <span class="message-time">Just now</span>
        </div>
      </div>
    `;
    
    messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
    input.value = '';
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Simulate response after 2 seconds
    setTimeout(() => {
      const responseHTML = `
        <div class="message-received">
          <img src="https://i.pravatar.cc/150?img=45" alt="Sarah" class="message-avatar">
          <div class="message-bubble message-bubble-received">
            <p>Thanks for your message! I'll get back to you soon.</p>
            <span class="message-time">Just now</span>
          </div>
        </div>
      `;
      messagesContainer.insertAdjacentHTML('beforeend', responseHTML);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 2000);
  }
}

function handleMessageKeyPress(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
}

function openRatingModal(traderName) {
  currentTrader = traderName;
  document.getElementById('rating-trader-name').textContent = traderName;
  document.getElementById('rating-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
  currentRating = 0;
  updateStars();
}

function closeRatingModal() {
  document.getElementById('rating-modal').classList.remove('active');
  document.body.style.overflow = 'auto';
  currentRating = 0;
  updateStars();
  document.getElementById('rating-review').value = '';
}

function setRating(rating) {
  currentRating = rating;
  updateStars();
}

function updateStars() {
  const stars = document.querySelectorAll('.star-btn');
  stars.forEach((star, index) => {
    const svg = star.querySelector('svg');
    if (index < currentRating) {
      svg.setAttribute('fill', '#fbbf24');
      svg.setAttribute('stroke', '#fbbf24');
    } else {
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
    }
  });
}

function submitRating() {
  if (currentRating === 0) {
    alert('Please select a rating');
    return;
  }
  
  const review = document.getElementById('rating-review').value;
  
  // Show success message
  const successHTML = `
    <div class="fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg z-[2000] animate-fade-in">
      <div class="flex items-center gap-3">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <div>
          <div class="font-bold">Rating Submitted!</div>
          <div class="text-sm">Thank you for your feedback</div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', successHTML);
  
  setTimeout(() => {
    document.querySelector('.fixed.top-4').remove();
  }, 3000);
  
  closeRatingModal();
  
  console.log('Rating submitted:', {
    trader: currentTrader,
    rating: currentRating,
    review: review
  });
}

// Auto-scroll to bottom on load
document.addEventListener('DOMContentLoaded', function() {
  const messagesContainer = document.getElementById('chat-messages');
  if (messagesContainer) {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
});

console.log('Messaging system loaded successfully!');
