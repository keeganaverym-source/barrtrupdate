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
