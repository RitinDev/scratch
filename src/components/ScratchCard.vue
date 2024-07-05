<template>
    <div class="scratch-card">
        <img :src="imageSrc" alt="Hidden Image" class="hidden-image" ref="hiddenImage">
        <canvas class="scratch-canvas" ref="scratchCanvas"></canvas>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    name: 'ScratchCard',
    props: {
        imageSrc: {
            type: String,
            required: true
        }
    },
    setup() {
        const hiddenImage = ref(null);
        const scratchCanvas = ref(null);

        onMounted(() => {
            const canvas = scratchCanvas.value;
            const ctx = canvas.getContext('2d');
            const image = hiddenImage.value;

            image.onload = () => {
                canvas.width = image.width;
                canvas.height = image.height;

                ctx.fillStyle = '#888';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            };

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

        return {
            hiddenImage,
            scratchCanvas
        };
    }
};
</script>

<style scoped>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}

.scratch-card {
    position: relative;
    width: 300px;
    height: 400px;
    overflow: hidden;
    border-radius: 6px;
}

.hidden-image {
    width: 100%;
    height: 100%;
}

.scratch-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}
</style>