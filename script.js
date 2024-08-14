
// Dynamic Greeting Based on Time of Day
const hour = new Date().getHours();
const greeting = document.querySelector('.greeting');
if (hour < 12) {
    greeting.textContent = 'Good Morning, I\'m Aryan Lakhanpal';
} else if (hour < 18) {
    greeting.textContent = 'Good Afternoon, I\'m Aryan Lakhanpal';
} else {
    greeting.textContent = 'Good Evening, I\'m Aryan Lakhanpal';
}

// Particle Background Effect
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particlesArray;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
    x: null,
    y: null,
    radius: (canvas.height / 80) * (canvas.width / 80)
};

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
    }
    update() {
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 5) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;
        let color = '#ffffff';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
}

window.addEventListener('resize', function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    mouse.radius = ((canvas.height / 80) * (canvas.width / 80));
    init();
});

window.addEventListener('mouseout', function() {
    mouse.x = undefined;
    mouse.y = undefined;
});

init();
animate();









































































