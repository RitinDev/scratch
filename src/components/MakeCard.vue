<template>
    <div class="card" :style="backgroundImageStyle">
        <textarea v-model="ScratchCardText" @input="updateText" :style="{ color: props.textColor }" maxlength="150"
            placeholder="Say Something Nice!" />
    </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';

const props = defineProps({
    backgroundImage: {
        type: String,
        required: true
    },
    textColor: {
        type: String,
        default: '#000000'
    }
});

const emit = defineEmits(['update:text']);

const ScratchCardText = ref('');

const updateText = () => {
    emit('update:text', ScratchCardText.value);
};

const backgroundImageStyle = computed(() => `background-image: url(${props.backgroundImage})`);

watch(() => props.textColor, (newColor) => {
    const cardTextArea = document.querySelector('.card textarea');
    if (cardTextArea) {
        cardTextArea.style.color = newColor;
    }
});

watch(() => props.backgroundImage, (newImage) => {
    const card = document.querySelector('.card');
    if (card) {
        card.style.backgroundImage = `url(${newImage})`;
    }
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

    background-repeat: no-repeat;
    background-size: cover;
}

textarea {
    width: 100%;
    height: 100%;
    resize: none;

    font-size: 1.8rem;
    font-weight: 700;
    font-family: "Raleway", sans-serif;

    padding: 8px;

    border: none;
    border-radius: 4px;
    overflow: hidden;

    background-color: transparent;
}
</style>