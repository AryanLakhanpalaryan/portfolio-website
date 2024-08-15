// Typewriter effect for greeting
const hour = new Date().getHours();
const greeting = document.querySelector('.greeting');
let greetingText = '';

if (hour < 12) {
    greetingText = 'Good Morning, I\'m Aryan Lakhanpal';
} else if (hour < 18) {
    greetingText = 'Good Afternoon, I\'m Aryan Lakhanpal';
} else {
    greetingText = 'Good Evening, I\'m Aryan Lakhanpal';
}

greeting.textContent = greetingText;

// Initialize Chart.js
const ctx = document.getElementById('skills-chart').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['HTML & CSS', 'JavaScript', 'Java', 'C++', 'Database Management'],
        datasets: [{
            label: 'Skill Level',
            data: [95, 90, 85, 80, 75],
            backgroundColor: '#17a2b8',
            borderColor: '#117a8b',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) { return value + '%' }
                }
            }
        }
    }
});
