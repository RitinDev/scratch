<template>
    <div class="card" :style="backgroundImageStyle">
        <canvas class="scratch-canvas" ref="scratchCanvas"></canvas>
        <div class="card-text" :style="{ color: props.textColor }">{{ props.text }}</div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const props = defineProps({
    backgroundImage: {
        type: String,
        required: true
    },
    textColor: {
        type: String,
        default: '#000000'
    },
    text: {
        type: String,
        required: true
    }
});

const scratchCanvas = ref(null);

const backgroundImageStyle = computed(() => ({
    backgroundImage: `url(${props.backgroundImage})`,
}));

onMounted(() => {
    const canvas = scratchCanvas.value;
    const ctx = canvas.getContext('2d');

    const initializeCanvas = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        ctx.fillStyle = '#888';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    initializeCanvas();

    const getMousePos = (canvas, evt) => {
        const rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    };

    const getTouchPos = (canvas, evt) => {
        const rect = canvas.getBoundingClientRect();
        const touch = evt.touches[0];
        return {
            x: touch.clientX - rect.left,
            y: touch.clientY - rect.top
        };
    };

    const scratch = (x, y) => {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, 2 * Math.PI, false);
        ctx.fill();
    };

    canvas.addEventListener('mousemove', (evt) => {
        if (evt.buttons === 1) {
            const mousePos = getMousePos(canvas, evt);
            scratch(mousePos.x, mousePos.y);
        }
    });

    canvas.addEventListener('mousedown', (evt) => {
        const mousePos = getMousePos(canvas, evt);
        scratch(mousePos.x, mousePos.y);
    });

    canvas.addEventListener('touchmove', (evt) => {
        evt.preventDefault();
        const touchPos = getTouchPos(canvas, evt);
        scratch(touchPos.x, touchPos.y);
    });

    canvas.addEventListener('touchstart', (evt) => {
        const touchPos = getTouchPos(canvas, evt);
        scratch(touchPos.x, touchPos.y);
    });
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

body {
    justify-content: center;
    align-items: center;
}

.card {
    position: relative;
    width: 400px;
    height: 500px;
    margin-top: 0.5em;
    overflow: hidden;
    border-radius: 6px;
    padding: 1em;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

    background-repeat: no-repeat;
    background-size: cover;
}

.card-text {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 8px;
    font-size: 1.8rem;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    border: none;
    border-radius: 4px;
    background-color: transparent;
    white-space: pre-wrap;
    word-wrap: break-word;
    z-index: 1; /* Ensure the text is below the canvas */
}

.scratch-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 2;
    /* Ensure the canvas is above the text */
}
</style>
