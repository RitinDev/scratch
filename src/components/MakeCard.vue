<template>
    <div class="card">
        <textarea v-model="ScratchCardText" @input="updateText" placeholder="Say Something Nice!" />
    </div>
    <p v-if="submittedText">Submitted Info: {{ submittedText }}</p>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'MakeCard',
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
    width: 300px;
    height: 400px;
    overflow: hidden;
    border: 2px dashed #ccc;
    border-radius: 6px;
    padding: 1em;
}

textarea {
    width: 100%;
    height: 100%;
    resize: none;

    font-size: x-large;
    
    padding: 8px;

    border: none;
    border-radius: 4px;
}
</style>