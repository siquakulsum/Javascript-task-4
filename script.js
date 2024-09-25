function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Format time to have leading zeros
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize clock on page load
  updateClock();
  