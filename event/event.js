// Function to calculate time left for events
function calculateTimeLeft(eventDateTime) {
    const now = new Date().getTime();
    const distance = eventDateTime - now;

    if (distance <= 0) {
        return "Contest Finished";
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
        days,
        hours,
        minutes,
        seconds
    };
}

// Function to update the countdown display
function updateCountdown(eventDateTime, elementId) {
    const countdown = document.getElementById(elementId);
    const timeLeft = calculateTimeLeft(eventDateTime);

    if (typeof timeLeft === "string") {
        countdown.innerHTML = timeLeft;
    } else {
        countdown.innerHTML = `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`;
    }
}

// Set event dates
const eventDates = [
    { dateTime: new Date('2024-03-27T20:00:00').getTime(), elementId: 'event1' }, // Event 1 on March 24, 2024, at 8:00 PM
    { dateTime: new Date('2024-04-03T20:00:00').getTime(), elementId: 'event2' }, // Event 2 on May 1, 2024, at 3:30 PM
    { dateTime: new Date('2024-04-10T18:45:00').getTime(), elementId: 'event3' }, // Event 3 on June 1, 2024, at 6:45 PM
    { dateTime: new Date('2024-03-28T20:05:00').getTime(), elementId: 'event4' },  // Event 4 on July 1, 2024, at 12:00 PM
    { dateTime: new Date('2024-03-30T18:45:00').getTime(), elementId: 'event5' }, // Event 3 on June 1, 2024, at 6:45 PM
    { dateTime: new Date('2024-04-10T18:45:00').getTime(), elementId: 'event6' } // Event 3 on June 1, 2024, at 6:45 PM
];

// Update countdown displays for all events
eventDates.forEach(event => {
    updateCountdown(event.dateTime, event.elementId);
});

// Update countdowns every second
setInterval(() => {
    eventDates.forEach(event => {
        updateCountdown(event.dateTime, event.elementId);
    });
}, 1000);
