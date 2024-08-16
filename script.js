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

const ctx = document.getElementById('skills-chart').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'Java', 'C', 'C++', 'Databse Mangement'],
        datasets: [{
            label: 'Skill Level',
            data: [100, 95, 80, 86, 70, 75,100],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40',
                '#FF9F90'
            ],
            borderColor: '#333',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
