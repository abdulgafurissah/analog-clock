function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate the angles for each hand
    const secondAngle = seconds * 6; // 360deg / 60s
    const minuteAngle = minutes * 6 + seconds * 0.1; // 360deg / 60m + gradual move per second
    const hourAngle = (hours % 12) * 30 + minutes * 0.5; // 360deg / 12h + gradual move per minute

    // Select clock hands
    const secondHand = document.querySelector(".second-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const hourHand = document.querySelector(".hour-hand");

    // Apply rotation to each hand
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to set clock hands
