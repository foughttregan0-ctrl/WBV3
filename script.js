const canvas = document.getElementById('world-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let world = [];

function initWorld() {
    for (let i = 0; i < 100; i++) {
        world[i] = [];
        for (let j = 0; j < 100; j++) {
            world[i][j] = Math.random() < 0.5 ? 1 : 0; // 1 for land, 0 for water
        }
    }
}

function drawWorld() {
    for (let i = 0; i < world.length; i++) {
        for (let j = 0; j < world[i].length; j++) {
            ctx.fillStyle = world[i][j] === 1 ? '#228B22' : '#1E90FF';
            ctx.fillRect(j * 10, i * 10, 10, 10);
        }
    }
}

function updateWorld() {
    // Add enhancements and details here
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWorld();
    updateWorld();
    requestAnimationFrame(gameLoop);
}

initWorld();
gameLoop();
