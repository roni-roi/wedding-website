// Wedding Countdown Timer
// Set the wedding date here (YYYY-MM-DD format)
const weddingDate = new Date('2025-11-08T13:30:00+02:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;
  
  if (distance < 0) {
    // Wedding has passed
    document.getElementById('countdown-timer').innerHTML = '<div class="countdown-message">🎉</div>';
    return;
  }
  
  // Calculate time units
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  countdownText = `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById('countdown-timer').textContent = countdownText;
}

// Initialize countdown when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Update countdown immediately and then every second
  updateCountdown();
  setInterval(updateCountdown, 1000);
});