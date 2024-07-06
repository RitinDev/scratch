<template>
    <div class="card" :style="backgroundImageStyle">
        <textarea v-model="ScratchCardText" @input="updateText" maxlength="150" placeholder="Say Something Nice!" />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'MakeCard',

    props: {
        backgroundImage: {
            type: String,
            required: true
        }
    },

    computed: {
        backgroundImageStyle() {
            return `background-image: url(${this.backgroundImage})`;
        }
    },

    setup() {
        const ScratchCardText = ref('');
        const submittedText = ref('');

        const updateText = () => {
            submittedText.value = ScratchCardText.value;
        };

        return {
            ScratchCardText,
            submittedText,
            updateText
        };
    }
};
</script>

<style scoped>
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

    padding: 8px;

    border: none;
    border-radius: 4px;
    overflow: hidden;

    background-color: transparent;
}
</style>